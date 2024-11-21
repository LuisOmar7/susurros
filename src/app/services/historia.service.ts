import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartesH } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private http: HttpClient) { }

  getHistoria(){
    return this.http.get('https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/.json');
  }

  getDetalleH(id: any){
    return this.http.get<PartesH>(`https://susurrosbosque-2ec78-default-rtdb.firebaseio.com/historia/${id}.json`);
  }
}
