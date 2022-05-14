import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenugridComponent } from './menugrid.component';

const routes: Routes = [{ path: '', component: MenugridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenugridRoutingModule { }
