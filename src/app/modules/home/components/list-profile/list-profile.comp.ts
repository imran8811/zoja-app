import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProfileService } from 'src/app/services';
import { IUserProfile } from 'src/app/models';

@Component({
  selector: 'app-list-profile',
  templateUrl: 'list-profile.html'
})

export class ListProfileComponent implements OnInit {
  createProfileForm: FormGroup;

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private profileservice: ProfileService
  ) {}

  async ngOnInit() {
    this.createProfileForm = this.fb.group({
      gender: ['female', Validators.required],
      fullName: ['', Validators.required],
      age : ['', Validators.required],
      education : ['', Validators.required],
      status : ['', Validators.required],
      profession : ['', Validators.required],
      cast : ['', Validators.required],
      maslak : ['', Validators.required],
      feet : ['', Validators.required],
      inch : ['', Validators.required],
    });
  }

  createProfile = async () => {
    const response = await this.profileservice.createProfile(this.createProfileForm.value) as IUserProfile;
    console.log(response);
  }

}
