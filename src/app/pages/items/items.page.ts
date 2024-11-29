import { Component, OnInit } from '@angular/core';
//Importación del servicio para acceder a los métodos que obtienen los items 
import { SusurrosService } from 'src/app/services/susurros.service';
//Importación de interfaces de items
import { datosI, infoI } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
    //Creación de objeto vacío para insertar los items
  items: datosI[]=[];

  constructor(private servicioSusurros: SusurrosService) { }
    //Método ngOnInit que inserta los items obtenidos en la interfaz y en el objeto vacío
  ngOnInit() {
    this.servicioSusurros.getDatosI()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.items.push({
          id: obj.payload.doc.id,
          data: <infoI>obj.payload.doc.data(),
        });
      });
    });
  }

}
