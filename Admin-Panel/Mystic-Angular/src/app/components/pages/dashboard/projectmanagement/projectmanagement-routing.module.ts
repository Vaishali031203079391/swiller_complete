import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEventsComponent } from './new-events/new-events.component';
import { OpeningsComponent } from './openings/openings.component';

import { ProjectmanagementComponent } from './projectmanagement.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [
  { path: '', component: ProjectmanagementComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'openings', component: OpeningsComponent },
  { path: 'events', component: NewEventsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }
