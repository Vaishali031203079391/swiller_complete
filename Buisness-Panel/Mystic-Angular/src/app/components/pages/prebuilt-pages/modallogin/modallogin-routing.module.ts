import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalloginComponent } from './modallogin.component';

const routes: Routes = [{ path: '', component: ModalloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalloginRoutingModule { }
