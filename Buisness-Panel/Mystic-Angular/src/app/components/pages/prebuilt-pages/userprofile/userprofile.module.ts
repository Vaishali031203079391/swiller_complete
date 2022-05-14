import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [UserprofileComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserprofileRoutingModule,
    NgbModule
  ]
})
export class UserprofileModule { }
