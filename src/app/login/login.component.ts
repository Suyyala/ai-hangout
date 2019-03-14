import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loggedIn = false;
  userName = 'Sridhar';
  constructor(private router: Router,
              private authService: AuthService) {}

  doLogin() {
    console.log(this.userName);
    this.authService.doAuthenticate().subscribe((authenticated: boolean) => {
      console.log('Authenticated: ', authenticated);
      this.loggedIn = authenticated;
      if (this.loggedIn) {
        this.router.navigate(['/ai-chat']).then(() => {
          console.log('routing done');
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  displayUser() {
    console.log(this.userName);
  }


}
