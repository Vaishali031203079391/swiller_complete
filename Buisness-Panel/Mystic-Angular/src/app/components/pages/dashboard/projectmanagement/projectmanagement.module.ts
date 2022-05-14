import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectmanagementComponent } from './projectmanagement.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SpecialsComponent } from './specials/specials.component';
import { OpeningsComponent } from './openings/openings.component';
import { NewEventsComponent } from './new-events/new-events.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ProjectmanagementComponent,
    ContentComponent,
    SpecialsComponent,
    OpeningsComponent,
    NewEventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectmanagementRoutingModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    Ng2SmartTableModule,
    PerfectScrollbarModule,
  ]
})
export class ProjectmanagementModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
