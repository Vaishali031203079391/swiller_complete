import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontawesomeComponent } from './fontawesome.component';

const routes: Routes = [{ path: '', component: FontawesomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontawesomeRoutingModule { }
