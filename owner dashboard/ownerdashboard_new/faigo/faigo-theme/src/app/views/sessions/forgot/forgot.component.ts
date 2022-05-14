import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/animations/shared-animations';
import { CustomValidators } from 'ngx-custom-validators';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

  forgotForm: FormGroup;
  loading: boolean;
  //radioGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      email: new FormControl('')
    });
    
  }

  onUpdate() {
    this.loading = true;
    setTimeout(() => {
      console.log(this.forgotForm.value);
      //console.log(this.profileForm.get('inputName') as FormArray);
      this.loading = false;
      this.toastr.success('Reset your link!.', 'Success!', {progressBar: true});
    }, 3000);
  }


}
