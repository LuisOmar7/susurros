import { Component, OnInit, Input } from '@angular/core';
//Importación de la interfaz donde se guarda la información de personaje
import {infoP} from '../../interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss'],
})
export class DetallePersonajeComponent  implements OnInit {
  //Declaración del objeto donde se guardarán los personajes 
  @Input() id:any;
  detallePersonaje={} as infoP;

  constructor(
    private detalle: PersonajesService,
    private modalCtrl: ModalController
  ) { }

  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.detalle.getDetalleP(this.id)
    .subscribe((respuesta) => {
      console.log('Detalle Personaje', respuesta)
      this.detallePersonaje=<infoP>respuesta;
    })
  }

}
