import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.comp';
import { PostAdComponent } from './components/post-ad/post-ad.comp';
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
    path: 'post-ad',
    component: PostAdComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
