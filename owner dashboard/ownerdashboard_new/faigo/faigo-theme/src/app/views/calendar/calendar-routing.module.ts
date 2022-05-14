import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';
import { OpeningsComponent } from './openings/openings.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'specials',
    component: SpecialsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'openings',
    component: OpeningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
