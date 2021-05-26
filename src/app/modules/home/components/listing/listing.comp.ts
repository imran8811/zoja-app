import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: 'listing.html'
})
export class ListingComponent implements OnInit {

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {}

  async findMatch(matchType){
    this.router.navigate(['/listing']);
  }

}
