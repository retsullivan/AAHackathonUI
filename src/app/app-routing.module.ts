import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as component from './components';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: component.HomeComponent },
  { path: 'worsttrip', component: component.WorsttripComponent },
  { path: 'worst-trip', component: component.WorsttripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
