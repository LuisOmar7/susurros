import { Component, OnInit, Input } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { PartesH } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-historia',
  templateUrl: './detalle-historia.component.html',
  styleUrls: ['./detalle-historia.component.scss'],
})
export class DetalleHistoriaComponent  implements OnInit {

  @Input() id:any;
  partesHistoria = {} as PartesH;

  constructor(
    private detalle: HistoriaService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.detalle.getDetalleH(this.id)
    .subscribe((respuesta: PartesH) => {
      console.log('Id de historia', this.id);
      console.log('Detalle Historia', respuesta);
      this.partesHistoria = respuesta;
    })
  }

}
