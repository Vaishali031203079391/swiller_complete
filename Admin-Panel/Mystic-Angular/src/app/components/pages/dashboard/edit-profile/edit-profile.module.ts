import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { EditProfileRoutingModule } from './edit-profile-routing.module';


@NgModule({
  declarations: [EditProfileComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
