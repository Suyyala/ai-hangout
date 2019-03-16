import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  doAuthenticate() {

   return new Observable((observer) => {
     setTimeout( () => {
       observer.next(true);
     }, 2000);
   }).pipe(map((data: boolean) => data));
  }
}
