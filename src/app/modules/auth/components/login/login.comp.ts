import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  userLogin(){}

}
