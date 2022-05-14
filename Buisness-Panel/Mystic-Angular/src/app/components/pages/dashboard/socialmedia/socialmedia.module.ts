import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { SocialmediaRoutingModule } from './socialmedia-routing.module';
import { SocialmediaComponent } from './socialmedia.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [SocialmediaComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    SocialmediaRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ]
})
export class SocialmediaModule { }
