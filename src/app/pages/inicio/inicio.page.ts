import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  video1 : any = "https://www.youtube.com/embed/KKylL3uBp20";

  constructor(private sanitizer: DomSanitizer) { }

  mostrarVideo(video: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
  }

}
