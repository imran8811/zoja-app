import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { IUserLogin } from 'src/app/models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.html'
})

export class ForgotPassComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  invalidCredentials = false;

  get form() { return this.forgotPasswordForm.controls; }

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authservice: AuthService
  ) {}

  async ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  forgotPassword = async () => {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }
    this.invalidCredentials = false;
    const res = await this.authservice.login(this.forgotPasswordForm.value) as IUserLogin;
    if(res.type === 'error'){
      this.invalidCredentials = true;
    } else if(res.type === 'success') {
      this.storage.create();
      this.storage.set('isLoggedIn', 'true');
      this.router.navigate(['/listing']);
    }
  }


}
