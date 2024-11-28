import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  video1 : any = "https://www.youtube.com/embed/7zm2rtfBOOs";

  constructor(private sanitizer: DomSanitizer) { }

  mostrarVideo(video: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

  ngOnInit() {
  }

}
