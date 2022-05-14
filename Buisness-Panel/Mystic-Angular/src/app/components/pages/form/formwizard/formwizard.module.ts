import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { AgmCoreModule } from '@agm/core';
import { FormwizardRoutingModule } from './formwizard-routing.module';
import { FormwizardComponent } from './formwizard.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [FormwizardComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormwizardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgWizardModule.forRoot(ngWizardConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxyG-VQxtPeg8hmnFkR9M58VFSOJkSDvU'
    })
  ]
})
export class FormwizardModule { }
