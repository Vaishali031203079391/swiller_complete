import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ContentComponent } from './content/content.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomersComponent } from './customers/customers.component';
import { RestaruntsComponent } from './restarunts/restarunts.component';

@NgModule({
  declarations: [AdminPanelComponent, ContentComponent, CustomersComponent, RestaruntsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
    AdminPanelRoutingModule,
    Ng2SmartTableModule
  ]
})

export class AdminPanelModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
