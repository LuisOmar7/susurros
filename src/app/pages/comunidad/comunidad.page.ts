import { Component, OnInit } from '@angular/core';
//Importación de firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
//Importación de las interfaces de comentarios
import { dataComents, coments } from 'src/app/interfaces/interfaces';
//Importación del servicio de susurros
import { SusurrosService } from 'src/app/services/susurros.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  //Creación de variables vacías donde se guardarán los comentarios nuevos
  nombre: string = '';
  comentario: string = '';
  //Creación de objeto para obtener los comentarios
  mensajes: dataComents[] = [];

  //Inicialización del servicio y de firestore en el constructor
  constructor(
    private servicioSusurros: SusurrosService,
    private firestore: AngularFirestore
  ) { }

  //Método ngOnInit para obtener los personas desde el servicio y asignarlos al objeto mensajes.
  ngOnInit() {
    this.servicioSusurros.getComentarios()
      .subscribe((resp) => {
        this.mensajes = [];
        console.log(resp[0].payload.doc)
        resp.forEach(obj => {
          this.mensajes.push({
            id: obj.payload.doc.id,
            data: <coments>obj.payload.doc.data(),
          });
        });
      });
  }

  //Método para enviar comentario, primero evalua que no haya espacios, luego lo asigna a las variables vacias creadas anteriormente, crea una fecha, por ultimo añade el nuevo comentario a la colección comentarios en firebase
  enviarComentario() {
    if (this.nombre.trim() && this.comentario.trim()) {
      const nuevoComentario = {
        nombre: this.nombre,
        comentario: this.comentario,
        fecha: new Date()
      };
      this.firestore.collection('comentarios').add(nuevoComentario).then(()=> {
        this.comentario = '';
      });
    }
  }
}
