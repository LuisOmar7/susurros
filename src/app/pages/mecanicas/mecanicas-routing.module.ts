import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MecanicasPage } from './mecanicas.page';

const routes: Routes = [
  {
    path: '',
    component: MecanicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MecanicasPageRoutingModule {}
