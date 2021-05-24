import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HomeComponent } from './components/home/home.comp';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule
  ]
})
export class HomeModule {}
