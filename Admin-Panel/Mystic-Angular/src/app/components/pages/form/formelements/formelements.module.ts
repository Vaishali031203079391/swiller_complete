import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormelementsRoutingModule } from './formelements-routing.module';
import { FormelementsComponent } from './formelements.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [FormelementsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormelementsRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class FormelementsModule { }
