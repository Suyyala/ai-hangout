import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;

  constructor(private afAuth: AngularFireAuth) {
    this.checkAuthenticate();
  }

  checkAuthenticate() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.authToken = user;
      } else {
        // No user is signed in.
      }
    });
  }


  isAuthenticated() {
    // return this.authToken ? true : false;
    return true;
  }

}
