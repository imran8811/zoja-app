import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthRoutingModule, COMPONENTS_LIST } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [COMPONENTS_LIST],
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
