import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SweetalertsComponent } from './sweetalerts.component';

const routes: Routes = [{ path: '', component: SweetalertsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SweetalertsRoutingModule { }
