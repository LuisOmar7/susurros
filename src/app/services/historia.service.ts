import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartesH } from '../interfaces/interfaces';
//Importación de firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }
  //Creación del método para obtener los datos de Historia
  getHistoria(){
    //return this.http.get('https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/.json');
    //Retorno de los datos de la colección "historia"
    return this.firestore.collection('historia').snapshotChanges();
  }

  //Creación del método para obtener los datos de Historia para el detalle
  getDetalleH(id: string){
    //return this.http.get<PartesH>(`https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/historia/${id}.json`);
    //Retorno de los datos de la colección "historia" para el modal
    return this.firestore.collection('historia').doc(id).valueChanges();
  }
}
