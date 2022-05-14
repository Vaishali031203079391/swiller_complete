import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  closeResult: string;
  constructor(private modalService: NgbModal, private authService: AuthService) { }
  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-min' });
  }
  loginForm: FormGroup;

  ngOnInit(): void {
    // Login Form
    this.loginForm = new FormGroup({
      restaurant_email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

}
