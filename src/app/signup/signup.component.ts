import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AiChatService} from '../ai-chat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  userSignup =  new FormGroup({
    userName: new FormControl('')
  });

  userId: string;
  routeParams$: any;


  constructor(private chatService: AiChatService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.userId = params.userId;
      console.log('UserId received', this.userId);
    });
  }

  ngOnDestroy() {
    this.routeParams$.unsubscribe();
  }

  onSubmit() {
    console.log(this.userSignup.value.userName);
    this.chatService.createUser(this.userId, this.userSignup.value.userName)
      .then((data) => {
        console.log('Created User Successfully!!');
        this.chatService.createChatRoom(this.userId, 'self')
          .then( () => {
            this.router.navigate(['/ai-chat', this.userId]);
          }).catch( (error) => {
           console.log('failed ot createChatRoom..', this.userId, 'self');
          });
      }).catch( (error) => {
        console.log('failed to create a user ', error);
    });
  }

}
