import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { HistoriaBD, PartesHistoria} from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleHistoriaComponent } from 'src/app/componentes/detalle-historia/detalle-historia.component';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {
  partesHistoria: PartesHistoria[]=[];
  historiaBD: HistoriaBD[]=[];

  constructor(
    private servicioHistoria: HistoriaService,
    private modalCtrl: ModalController
  ) { }

  async verDetalleHistoria(id: number){
    const modal = await this.modalCtrl.create({
      component: DetalleHistoriaComponent,
      componentProps: {id}
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioHistoria.getHistoria()
    .subscribe((datos: any) => {
      console.log(datos);
      this.historiaBD = datos;
      this.partesHistoria = datos.historia;
    });
  }
    /*this.servicioPersonajes.getDatos()
    .subscribe((datos: any) => {
      console.log(datos);
      this.respuestaBD = datos;
      this.personajesRecientes = datos.data;
    });
  }*/
}
