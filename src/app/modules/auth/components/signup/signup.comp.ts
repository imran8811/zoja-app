import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.html'
})

export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  userSignup(){}

}
