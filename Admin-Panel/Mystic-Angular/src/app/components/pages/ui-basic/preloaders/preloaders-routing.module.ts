import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloadersComponent } from './preloaders.component';

const routes: Routes = [{ path: '', component: PreloadersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadersRoutingModule { }
