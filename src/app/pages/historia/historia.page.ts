import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { datosH, infoH} from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleHistoriaComponent } from 'src/app/componentes/detalle-historia/detalle-historia.component';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  partesHistoria: datosH[]=[];

  constructor(
    private servicioHistoria: HistoriaService,
    private modalCtrl: ModalController
  ) { }

  async verDetalleHistoria(id: string){
    const modal = await this.modalCtrl.create({
      component: DetalleHistoriaComponent,
      componentProps: {id}
    });
    modal.present();
  }

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
    /*this.servicioHistoria.getHistoria()
    .subscribe((datos: any) => {
      console.log(datos);
      this.historiaBD = datos;
      this.partesHistoria = datos.historia;
    });*/
  }
}
