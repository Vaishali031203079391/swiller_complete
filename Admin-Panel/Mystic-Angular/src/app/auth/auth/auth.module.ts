import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth-routing.module';
import { FormwizardModule } from 'src/app/components/pages/form/formwizard/formwizard.module';
import { FormwizardRoutingModule } from 'src/app/components/pages/form/formwizard/formwizard-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormwizardModule,
    FormwizardRoutingModule
  ]
})
export class AuthModule { }
