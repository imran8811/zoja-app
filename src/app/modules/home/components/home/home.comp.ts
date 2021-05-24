import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController
  ) {}

  async ngOnInit() {}

  async findMatch(matchType){

  }

}
