import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as component from "./components";

const routes: Routes = [
 { path: 'home', component: component.HomeComponent },
 {path:"", redirectTo: "home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
