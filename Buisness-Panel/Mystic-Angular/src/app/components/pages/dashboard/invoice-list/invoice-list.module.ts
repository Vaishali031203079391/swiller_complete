import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { InvoiceListRoutingModule } from './invoice-list-routing.module';

@NgModule({
  declarations: [InvoiceListComponent, ContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    Ng2SmartTableModule,
    InvoiceListRoutingModule
  ]
})
export class InvoiceListModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}123
