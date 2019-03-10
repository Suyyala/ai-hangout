import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  constructor(private router: Router) {}

  doLogin() {
    this.loggedIn = true;
    this.router.navigate(['/ai-chat']).then(() => {
      console.log('routing done');
    });
  }

  doLogout() {
    this.loggedIn = false;
  }

  ngOnInit(): void {
  }
}
