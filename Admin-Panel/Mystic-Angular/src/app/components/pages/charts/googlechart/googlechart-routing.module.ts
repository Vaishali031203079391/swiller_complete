import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglechartComponent } from './googlechart.component';

const routes: Routes = [{ path: '', component: GooglechartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglechartRoutingModule { }
