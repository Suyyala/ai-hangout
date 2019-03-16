import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';


@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  phoneLogin =  new FormGroup({
    phoneNumber: new FormControl('')
  });
  phoneVerify =  new FormGroup({
    verifyCode: new FormControl('')
  });
  private reCaptcha: any;
  windowRef: any = window;
  user: any;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit() {
    this.windowRef.reCaptcha = new auth.RecaptchaVerifier('re-captcha');
    this.windowRef.reCaptcha.render().then( () => {});
  }

  onSubmit() {
    console.log('entered number', this.phoneLogin.value);
    this.afAuth.auth.signInWithPhoneNumber(this.phoneLogin.value.phoneNumber, this.windowRef.reCaptcha)
      .then( (confirmationResult) => {
        console.log(confirmationResult);
        this.windowRef.confirmationResult = confirmationResult;
    }).catch((error) => {
      console.log('failed', error);
    });
  }

  verifyPhoneCode() {
    this.windowRef.confirmationResult.confirm(this.phoneVerify.value.verifyCode)
      .then( (user) => {
        this.user = user;
        console.log('Phone verificaiton sucess!', user);
        this.router.navigate(['/ai-chat']);
      }).catch((error) => {
        console.log('something bad happended', error);
    }) ;
  }
}
