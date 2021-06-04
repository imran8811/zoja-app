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
    private router: Router
  ) {
    this.isLoggedIn();
  }

  async isLoggedIn() {
    this.storage.create();
    const isLoggedIn = await this.storage.get('loggedIn') === 'true'? true : false;
    this.logggedIn = isLoggedIn;
  }

  userLogout = async () => {
    this.storage.clear();
    this.router.navigate(['/']);
  }

}
