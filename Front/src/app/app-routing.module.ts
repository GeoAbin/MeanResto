import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"resto",
    pathMatch:"full"
  },
  {
    path:"resto",
    loadChildren: () =>import("./resto/resto.module").then(m => m.RestoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
