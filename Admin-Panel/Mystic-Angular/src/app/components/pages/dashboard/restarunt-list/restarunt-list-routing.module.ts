import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaruntListComponent } from './restarunt-list.component';

const routes: Routes = [
  { path: '', component: RestaruntListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaruntListRoutingModule { }
