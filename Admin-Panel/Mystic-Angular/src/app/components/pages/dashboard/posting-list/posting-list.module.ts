import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingListComponent } from './posting-list.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PostingListRoutingModule } from './posting-list-routing.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PostingListComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    PerfectScrollbarModule,
    PostingListRoutingModule
  ]
})
export class PostingListModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
