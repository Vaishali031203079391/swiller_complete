import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ngx-custom-validators';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;
  loading: boolean;
  //radioGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
    
  }

  onContact() {
    this.loading = true;
    setTimeout(() => {
      console.log(this.contactForm.value);
      this.loading = false;
      this.toastr.success('Message Sent.', 'Success!', {progressBar: true});
    }, 3000);
  }

}
