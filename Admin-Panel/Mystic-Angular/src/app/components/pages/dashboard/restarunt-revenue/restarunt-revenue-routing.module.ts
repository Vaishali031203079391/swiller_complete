import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaruntRevenueComponent } from './restarunt-revenue.component';

const routes: Routes = [
  { path: '', component: RestaruntRevenueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaruntRevenueRoutingModule { }
