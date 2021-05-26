import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(
    private storage: Storage,
    private alertcontroller: AlertController,
    private menu: MenuController
  ) {
    // this.openFirst();
  }

  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }

  // openEnd() {
  //   this.menu.open('end');
  // }

  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }

}
