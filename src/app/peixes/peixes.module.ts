import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeixesPageRoutingModule } from './peixes-routing.module';

import { PeixesPage } from './peixes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeixesPageRoutingModule
  ],
  declarations: [PeixesPage]
})
export class PeixesPageModule {}
