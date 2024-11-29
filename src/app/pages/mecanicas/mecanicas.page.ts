import { Component, OnInit } from '@angular/core';
//Importación del servicio para acceder a los métodos que obtienen las mecánicas 
import { SusurrosService } from 'src/app/services/susurros.service';
//Importación de interfaces de mecanicas
import { datosM, infoM } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mecanicas',
  templateUrl: './mecanicas.page.html',
  styleUrls: ['./mecanicas.page.scss'],
})
export class MecanicasPage implements OnInit {
  //Creación de objeto vacío para insertar las mecanicas
  mecanicas: datosM[]=[];

  constructor(private servicioSusurros: SusurrosService) { }
  //Método ngOnInit que inserta las mecánicas obtenidas en la interfaz y en el objeto vacío
  ngOnInit() {
    this.servicioSusurros.getDatosM()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.mecanicas.push({
          id: obj.payload.doc.id,
          data: <infoM>obj.payload.doc.data(),
        });
      });
    });
  }

}
