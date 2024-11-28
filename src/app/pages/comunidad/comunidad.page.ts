import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  nombre: string = ''; 
  comentario: string = '';
  mensajes: any[] = []; 

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('comentarios', ref => ref.orderBy('fecha', 'asc'))
      .valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.mensajes = data;
      });
  }

  enviarComentario() {
    if (this.nombre.trim() && this.comentario.trim()) {
      const nuevoComentario = {
        nombre: this.nombre,
        comentario: this.comentario,
        fecha: new Date() 
      };
      this.firestore.collection('comentarios').add(nuevoComentario)
    }
  }
}
