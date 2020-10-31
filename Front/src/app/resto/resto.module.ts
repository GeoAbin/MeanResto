import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { AllRestoComponent } from './all-resto/all-resto.component';


@NgModule({
  declarations: [AllRestoComponent],
  imports: [
    CommonModule,
    RestoRoutingModule
  ]
})
export class RestoModule { }
