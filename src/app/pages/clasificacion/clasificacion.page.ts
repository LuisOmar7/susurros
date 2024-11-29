import { Component, OnInit } from '@angular/core';
//Importación del servicio para acceder a los métodos que obtienen la clasificación
import { SusurrosService } from 'src/app/services/susurros.service';
//Importación de interfaces de clsificación
import { datosC, infoC} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {
  //Creación de objeto vacío para insertar las mecanicas
  clasificacion: datosC[]=[];

  constructor(
    private servicioHistoria: SusurrosService,
  ) { }
   //Método ngOnInit que inserta las mecánicas obtenidas en la interfaz y en el objeto vacío
  ngOnInit() {
    this.servicioHistoria.getDatosC()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.clasificacion.push({
          id: obj.payload.doc.id,
          data: <infoC>obj.payload.doc.data(),
        });
      });
    });
  }

}
