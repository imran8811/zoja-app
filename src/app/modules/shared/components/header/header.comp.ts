import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  logggedIn = false;

  constructor(
    private storage: Storage,
    private router: Router,
    private menu: MenuController
  ) {
    this.isLoggedIn();
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }



  async isLoggedIn() {
    this.storage.create();
    const isLoggedIn = await this.storage.get('isLoggedIn') === 'true'? true : false;
    this.logggedIn = isLoggedIn;
  }

  userLogout = async () => {
    this.storage.clear();
    this.logggedIn = false;
    this.router.navigate(['/']);
  };

}
