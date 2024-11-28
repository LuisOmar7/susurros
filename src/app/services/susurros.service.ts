import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SusurrosService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //Creación del método para obtener los datos de Historia
  getHistoria() {
    //Retorno de los datos de la colección "historia"
    return this.firestore.collection('historia', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Historia para el detalle
  getDetalleH(id: string) {
    //Retorno de los datos de la colección "historia" para el modal
    return this.firestore.collection('historia').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de Personajes
  getDatosP() {
    //Retorno de los personajes.
    return this.firestore.collection('personajes',  ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Personajes para detalle
  getDetalleP(id: string) {
    //Retorno del id de los personajes para el modal
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de Mecánicas
  getDatosM() {
    return this.firestore.collection('mecanicas', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Items
  getDatosI() {
    return this.firestore.collection('items', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de la Clasificación
  getDatosC() {
    return this.firestore.collection('clasificacion').snapshotChanges();
  }

  //Creación del método para obtener los datos de los Comentarios
  getComentarios() {
    return this.firestore.collection('comentarios', ref => ref.orderBy('fecha', 'asc')).snapshotChanges();
  }

}
