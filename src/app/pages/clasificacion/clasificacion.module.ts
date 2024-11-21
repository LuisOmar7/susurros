import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../../componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

import { ClasificacionPageRoutingModule } from './clasificacion-routing.module';

import { ClasificacionPage } from './clasificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasificacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ClasificacionPage]
})
export class ClasificacionPageModule {}
