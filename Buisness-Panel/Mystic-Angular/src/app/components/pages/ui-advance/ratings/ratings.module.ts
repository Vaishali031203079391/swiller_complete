import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RatingsRoutingModule } from './ratings-routing.module';
import { RatingsComponent } from './ratings.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [RatingsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RatingsRoutingModule,
    NgbModule
  ]
})
export class RatingsModule { }
