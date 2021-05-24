import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController
  ) {}

}
