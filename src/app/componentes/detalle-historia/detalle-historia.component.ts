import { Component, OnInit, Input } from '@angular/core';
//Importaciones necesarias para gestionar el modal
import { SusurrosService } from 'src/app/services/susurros.service';
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
    private detalle: SusurrosService,
    private modalCtrl: ModalController
  ) { }
  //Método para cerrar modal
  regresar(){
    this.modalCtrl.dismiss();
  }
  //Método ngOnInit para obtener los detalles de Historia
  ngOnInit() {
    this.detalle.getDetalleH(this.id)
    .subscribe((respuesta) => {
      console.log('Detalle Historia', respuesta)
      this.partesHistoria = <infoH>respuesta;
    });
  }

}
