import { Component, OnInit } from '@angular/core';
import { SusurrosService } from 'src/app/services/susurros.service';
import { datosC, infoC} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {

  clasificacion: datosC[]=[];

  constructor(
    private servicioHistoria: SusurrosService,
  ) { }

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
