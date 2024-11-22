import { Component, OnInit } from '@angular/core';
import { datosP, infoP } from '../../interfaces/interfaces';
//Importación del servicio de personajes
import { PersonajesService } from 'src/app/services/personajes.service';
//Imortaciones para gestionar el modal
import { ModalController } from '@ionic/angular';
import { DetallePersonajeComponent } from 'src/app/componentes/detalle-personaje/detalle-personaje.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  //Inicialización del objeto donde se guardarán los personajes
  personajesBD: datosP[]=[];

  constructor(
    private servicioPersonajes: PersonajesService,
    private modalCtrl: ModalController
  ) { }

  //Método para ver los detalles del personaje, y crea un modal
  async verDetalleP(id:string){
    const modal = await this.modalCtrl.create({
      component: DetallePersonajeComponent,
      componentProps: {id}
    })
    modal.present();
  }
  //Método ngOnInit que obtiene los personajes de la bd de firebase
  ngOnInit() {
    this.servicioPersonajes.getDatosP()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.personajesBD.push({
          id: obj.payload.doc.id,
          data: <infoP>obj.payload.doc.data(),
        })
      })
    })
  }

}
