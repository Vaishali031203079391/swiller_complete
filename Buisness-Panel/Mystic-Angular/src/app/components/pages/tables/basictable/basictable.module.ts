import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasictableRoutingModule } from './basictable-routing.module';
import { BasictableComponent } from './basictable.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [BasictableComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    BasictableRoutingModule
  ]
})
export class BasictableModule { }
