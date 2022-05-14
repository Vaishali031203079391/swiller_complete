import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AddProductRoutingModule } from './add-product-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AddProductComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddProductRoutingModule,
    NgbModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ]
})
export class AddProductModule { }
12
