import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {

  loading: boolean;
  loadingText: string;
  signupForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Loading Dashboard Module...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
            
        });

        this.signupForm = this.fb.group({
            username: ['vaishali', Validators.required],
            email: ['test@example.com', Validators.required],
            password: ['1234', Validators.required],
            repassword: ['1234', Validators.required]
        });
    }

    signUp() {
        this.loading = true;
        this.loadingText = 'Sigining in...';
        let username = this.signupForm.get('username').value;
        let email = this.signupForm.get('email').value;
        let confirmpassword = this.signupForm.get('repassword').value;
        let data = {
            username: this.signupForm.get('username').value,
            email: this.signupForm.get('email').value,
            confirmpassword: this.signupForm.get('repassword').value
        };
        this.auth.createUser(username, email, confirmpassword);
    }

}
