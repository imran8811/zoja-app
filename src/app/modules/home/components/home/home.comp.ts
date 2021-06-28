import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {}

  async findMatch(matchType){
    console.log(matchType);
    this.router.navigate(['listing']);
  }

}
