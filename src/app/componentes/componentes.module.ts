import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
//Importación del detalle de historia para modal
import { DetalleHistoriaComponent } from './detalle-historia/detalle-historia.component';
//Importación del detalle de personajes para modal
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';

@NgModule({
  declarations: [HeaderComponent, DetalleHistoriaComponent, DetallePersonajeComponent],
  exports: [HeaderComponent, DetalleHistoriaComponent, DetallePersonajeComponent],
  imports: [
    CommonModule, 
    IonicModule
  ]
})
export class ComponentesModule { }
