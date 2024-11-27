import { Component, OnInit } from '@angular/core';
import { SusurrosService } from 'src/app/services/susurros.service';
import { datosI, infoI } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items: datosI[]=[];

  constructor(private servicioSusurros: SusurrosService) { }

  ngOnInit() {
    this.servicioSusurros.getDatosI()
    .subscribe((resp) => {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.items.push({
          id: obj.payload.doc.id,
          data: <infoI>obj.payload.doc.data(),
        });
      });
    });
  }

}
