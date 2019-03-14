import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  doAuthenticate() {
    return of(true).pipe(delay(200));
  }
}
