import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { infoH } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-historia',
  templateUrl: './detalle-historia.component.html',
  styleUrls: ['./detalle-historia.component.scss'],
})
export class DetalleHistoriaComponent  implements OnInit {

  @Input() id:any;
  partesHistoria = {} as infoH;

  constructor(
    private detalle: HistoriaService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.detalle.getDetalleH(this.id)
    .subscribe((respuesta) => {
      console.log('Detalle Historia', respuesta)
      this.partesHistoria = <infoH>respuesta;
    });
    /*this.detalle.getDetalleH(this.id)
    .subscribe((respuesta: PartesH) => {
      console.log('Id de historia', this.id);
      console.log('Detalle Historia', respuesta);
      this.partesHistoria = respuesta;
    })*/
  }

}
