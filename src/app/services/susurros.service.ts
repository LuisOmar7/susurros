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
    //return this.http.get('https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/.json');
    //Retorno de los datos de la colección "historia"
    return this.firestore.collection('historia', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Historia para el detalle
  getDetalleH(id: string) {
    //return this.http.get<PartesH>(`https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/historia/${id}.json`);
    //Retorno de los datos de la colección "historia" para el modal
    return this.firestore.collection('historia').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de Personajes
  getDatosP() {
    return this.firestore.collection('personajes',  ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Personajes para detalle
  getDetalleP(id: string) {
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de Mecánicas
  getDatosM() {
    return this.firestore.collection('mecanicas', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Mecánicas para detalle
  getDetalleM(id: string) {
    return this.firestore.collection('mecanicas').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de Items
  getDatosI() {
    return this.firestore.collection('items', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }

  //Creación del método para obtener los datos de Items para detalle
  getDetalleI(id: string) {
    return this.firestore.collection('items').doc(id).valueChanges();
  }

  //Creación del método para obtener los datos de la Clasificación
  getDatosC() {
    return this.firestore.collection('clasificacion').snapshotChanges();
  }

}
