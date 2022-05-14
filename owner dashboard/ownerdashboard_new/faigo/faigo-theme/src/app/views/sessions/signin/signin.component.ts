import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
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

        this.signinForm = this.fb.group({
            email: ['test@example.com', Validators.required],
            password: ['1234', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Sigining in...';
        let email = this.signinForm.get('email').value;
        let confirmpassword = this.signinForm.get('password').value;
        //this.router.navigate(['/forms/wizard']);
        this.router.navigate(['/forms/wizard']);
        //this.auth.login(email, confirmpassword);
    }

}
