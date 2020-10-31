import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestoComponent } from './all-resto/all-resto.component';

const routes: Routes = [
  {
    path:"",
    component:AllRestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
