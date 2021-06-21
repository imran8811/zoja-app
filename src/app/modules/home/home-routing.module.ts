import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardService } from 'src/app/services/guard.service';
import { HomeComponent } from './components/home/home.comp';
import { CreateProfileComponent } from './components/create-profile/create-profile.comp';
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
    path: 'create-profile',
    component: CreateProfileComponent,
    canActivate: [GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
