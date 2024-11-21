import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { DetalleHistoriaComponent } from './detalle-historia/detalle-historia.component';

@NgModule({
  declarations: [HeaderComponent, DetalleHistoriaComponent],
  exports: [HeaderComponent, DetalleHistoriaComponent],
  imports: [
    CommonModule, 
    IonicModule
  ]
})
export class ComponentesModule { }
