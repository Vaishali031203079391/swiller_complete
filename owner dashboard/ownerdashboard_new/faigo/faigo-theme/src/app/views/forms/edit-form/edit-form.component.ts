import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ngx-custom-validators';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  profileForm: FormGroup;
  loading: boolean;
  //radioGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      company: new FormGroup({
        inputName: new FormControl(''),
        inputSpeciality: new FormControl(''),
        inputPriceRange: new FormControl(''),
        inputCompany: new FormControl(''),
        inputFounded: new FormControl('')
      }),
      address: new FormGroup({
        inputAddress: new FormControl(''),
        inputCity: new FormControl(''),
        inputState: new FormControl(''),
        inputZip: new FormControl('')
      }),
      contact: new FormGroup({
        inputEmail: new FormControl(''),
        inputWebsite: new FormControl(''),
        inputPhone: new FormControl('')
      })
    });
    
  }

  onUpdate() {
    this.loading = true;
    setTimeout(() => {
      console.log(this.profileForm.value);
      //console.log(this.profileForm.get('inputName') as FormArray);
      this.loading = false;
      this.toastr.success('Profile updated.', 'Success!', {progressBar: true});
    }, 3000);
  }


}
