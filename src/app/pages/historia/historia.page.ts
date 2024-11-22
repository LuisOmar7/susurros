import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
//Importaciones para la gestión del modal
import { datosH, infoH} from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleHistoriaComponent } from 'src/app/componentes/detalle-historia/detalle-historia.component';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  //Creación del objeto donde se guardará la historia del videojeugo
  partesHistoria: datosH[]=[];

  constructor(
    private servicioHistoria: HistoriaService,
    private modalCtrl: ModalController
  ) { }

  //Método que obtiene los datos para el detalle de cada historia y crea el modal
  async verDetalleHistoria(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleHistoriaComponent,
      componentProps: {id}
    });
    modal.present();
  }
  //Método ngOnInit que obtiene los datos de la bd de historia y los almacena
  ngOnInit() {
    this.servicioHistoria.getHistoria()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.partesHistoria.push({
          id: obj.payload.doc.id,
          data: <infoH>obj.payload.doc.data(),
        });
      });
    });
  }
}
