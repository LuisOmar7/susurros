import { Component, OnInit } from '@angular/core';
//Importación para mostrar video de youtube
import { DomSanitizer } from '@angular/platform-browser';
//Servicio de susurros para acceder al método de obtención de datos para el inicio.
import { SusurrosService } from 'src/app/services/susurros.service';
//Interfaces del inicio y del video
import { datosInicio, inicio, videos, datosV } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //Objeto vacío para insertar los datos del inicio.
  datosInicio : datosInicio[]=[];
  //Objeto vacío para insertar los vídeos.
  videos: datosV[] = [];
  //Inicializaciones en el constructor
  constructor(
    private sanitizer: DomSanitizer,
    private susurrosService: SusurrosService
  ) { }
  //Método para mostrar vídeo, que espera como parámetro el vídeo para procesar la url.
  mostrarVideo(video: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
    //Inserción de datos en objeto vacío y interfaz de videos 
    this.susurrosService.getVideos()
      .subscribe((resp) => {
        this.videos = [];
        console.log(resp[0].payload.doc)
        resp.forEach(obj => {
          this.videos.push({
            id: obj.payload.doc.id,
            data: <videos>obj.payload.doc.data(),
          });
        });
      });
      //Inserción de datos en objeto vacío y interfaz de inicio
      this.susurrosService.getInicio()
      .subscribe((resp) => {
        console.log(resp[0].payload.doc)
        resp.forEach(obj => {
          this.datosInicio.push({
            id: obj.payload.doc.id,
            data: <inicio>obj.payload.doc.data(),
          });
        });
      });
  }

}
