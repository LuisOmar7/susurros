import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importación de firestores
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  //Creación del método para obtener los datos de Personajes
  getDatosP(){
    return this.firestore.collection('personajes').snapshotChanges();
  }

  //Creación del método para obtener los datos de Personajes para detalle
  getDetalleP(id: string){
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }
}
