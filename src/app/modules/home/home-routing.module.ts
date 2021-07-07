import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardService } from 'src/app/services/guard.service';
import { HomeComponent } from './components/home/home.comp';
import { ListProfileComponent } from './components/list-profile/list-profile.comp';
import { ListingComponent } from './components/listing/listing.comp';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listing',
    component: ListingComponent
  },
  {
    path: 'list-profile',
    component: ListProfileComponent,
    canActivate: [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
