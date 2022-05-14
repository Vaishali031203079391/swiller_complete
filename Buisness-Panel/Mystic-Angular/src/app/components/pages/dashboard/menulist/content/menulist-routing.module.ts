import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenulistComponent } from '../menulist.component';

const routes: Routes = [{ path: '', component: MenulistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenulistRoutingModule { }
