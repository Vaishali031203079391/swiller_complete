import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  step1form: FormGroup;
  name = new FormControl('');
  step = null;
  resturant_name: string = '';

  constructor(private ngWizardService: NgWizardService) {
  }
  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style4config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) {
    console.log(_args.step.description);

    if(_args.previousStep !== undefined){
      this.step = _args.previousStep.description;
    }

    if(this.step==1){
      console.log(this.resturant_name);
    }
  };

  ngOnInit() {
    this.createWizardForm();
  }

  createWizardForm(){

  }

}
