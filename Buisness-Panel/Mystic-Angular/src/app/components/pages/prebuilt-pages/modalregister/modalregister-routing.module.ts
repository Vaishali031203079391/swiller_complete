import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalregisterComponent } from './modalregister.component';

const routes: Routes = [{ path: '', component: ModalregisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalregisterRoutingModule { }
