import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';
import { AppImgCropperComponent } from './img-cropper/img-cropper.component';
import { WizardComponent } from './wizard/wizard.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'settings',
    component: EditFormComponent
  },
  {
    path: 'basic',
    component: BasicFormComponent
  },
  {
    path: 'layouts',
    component: FormLayoutsComponent
  },
  {
    path: 'input-group',
    component: InputGroupsComponent
  },
  {
    path: 'input-mask',
    component: InputMaskComponent
  },
  {
    path: 'tag-input',
    component: TagInputsComponent
  },
  {
    path: 'wizard',
    component: WizardComponent
  },
  /*{
    path: 'register',
    component: SignupComponent
  },*/
  {
    path: 'img-cropper',
    component: AppImgCropperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
