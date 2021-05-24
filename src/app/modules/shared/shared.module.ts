import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HeaderComponent } from './components/header/header.comp';
import { FooterComponent } from './components/footer/footer.comp';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    IonicStorageModule.forRoot()
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
