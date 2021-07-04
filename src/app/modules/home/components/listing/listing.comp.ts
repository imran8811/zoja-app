import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from 'src/app/services';
import { ISearchResults } from 'src/app/models';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-listing',
  templateUrl: 'listing.html'
})
export class ListingComponent implements OnInit {
  profileListing;
  searchFilter = false;
  filterForm: FormGroup;

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  async ngOnInit() {
    this.findMatch();
  }

  async findMatch(){
    const data = {
      gender: this.route.snapshot.queryParams.searchType
    };
    this.profileListing = await this.searchService.search(data) as ISearchResults;
  }

}
