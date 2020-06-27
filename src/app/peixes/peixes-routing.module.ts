import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeixesPage } from './peixes.page';

const routes: Routes = [
  {
    path: '',
    component: PeixesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeixesPageRoutingModule {}
