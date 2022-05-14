import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaruntRevenueComponent } from './restarunt-revenue.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RestaruntRevenueRoutingModule } from './restarunt-revenue-routing.module';

@NgModule({
  declarations: [RestaruntRevenueComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    PerfectScrollbarModule,
    RestaruntRevenueRoutingModule
  ]
})
export class RestaruntRevenueModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
