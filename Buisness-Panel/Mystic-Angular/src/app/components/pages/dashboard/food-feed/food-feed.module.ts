import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodFeedComponent } from './food-feed.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { FoodFeedRoutingModule } from './food-feed-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodFeedComponent, ContentComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    FoodFeedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoodFeedModule { }
