import { Component, OnInit } from '@angular/core';
import { SusurrosService } from 'src/app/services/susurros.service';
import { datosM, infoM } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mecanicas',
  templateUrl: './mecanicas.page.html',
  styleUrls: ['./mecanicas.page.scss'],
})
export class MecanicasPage implements OnInit {

  mecanicas: datosM[]=[];

  constructor(private servicioSusurros: SusurrosService) { }

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
