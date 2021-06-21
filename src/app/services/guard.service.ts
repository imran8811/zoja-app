import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private storage: Storage,
    private router: Router
  ) {}

  async canActivate() {
    this.storage.create();
    const isLoggedIn = await this.storage.get('isLoggedIn') === 'true'? true : false;
    if(isLoggedIn === true){
      return true;
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
