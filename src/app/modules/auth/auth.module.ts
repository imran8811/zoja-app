import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './components/login/login.comp';
import { SignupComponent } from './components/signup/signup.comp';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule
  ]
})
export class AuthModule {}
