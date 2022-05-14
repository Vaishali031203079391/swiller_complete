import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DatatableRoutingModule } from './datatable-routing.module';
import { DatatableComponent } from './datatable.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [DatatableComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    DatatableRoutingModule,
    NgbModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class DatatableModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
