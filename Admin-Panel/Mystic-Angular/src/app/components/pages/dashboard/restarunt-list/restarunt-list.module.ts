import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaruntListComponent } from './restarunt-list.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RestaruntListRoutingModule } from './restarunt-list-routing.module';
import { RestaruntOverviewComponent } from './restarunt-overview/restarunt-overview.component';
import { OffersComponent } from './offers/offers.component';
import { SpecialsComponent } from './specials/specials.component';
import { NewEventsComponent } from './new-events/new-events.component';
import { OpeningsComponent } from './openings/openings.component';

@NgModule({
  declarations: [RestaruntListComponent, ContentComponent, RestaruntOverviewComponent, OffersComponent, SpecialsComponent, NewEventsComponent, OpeningsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    PerfectScrollbarModule,
    RestaruntListRoutingModule
  ]
})
export class RestaruntListModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
