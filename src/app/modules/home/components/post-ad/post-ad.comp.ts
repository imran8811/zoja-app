import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-ad',
  templateUrl: 'post-ad.html'
})

export class PostAdComponent implements OnInit {
  createAdForm: FormGroup;

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this.createAdForm = this.fb.group({
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

  createAd(){}

}
