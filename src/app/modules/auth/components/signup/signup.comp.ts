import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { IApiResponse } from 'src/app/models/general.model';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.html'
})

export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  passwordMatch = true;

  get form(){ return this.signUpForm.controls; }

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authservice: AuthService
  ) {}

  async ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength]],
      confirmPassword : ['', Validators.required]
    });
  }

  userSignup = async () => {
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      return;
    }
    if(this.form.confirmPassword.value !== this.form.password.value){
      this.passwordMatch = false;
      return;
    }
    const res = await this.authservice.signUp(this.signUpForm.value) as IApiResponse;
    if(res.type === 'success'){
      this.signUpForm.reset();
      this.router.navigate(['/auth/login']);
    }
  }

}
