import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  userId: string;
  userName: string;
  room;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private chatService: AiChatService) { }

  ngOnInit() {
    console.log('This is user', this.userId);
    this.route.params.subscribe((params) => {
      console.log('Router Params', params);
      this.userId = params.userId;
      this.chatService.getUserDetails(this.userId)
        .subscribe( (userName: string) => {
          console.log(userName);
          this.userName = userName;
        });
    });
  }

  doLogout() {
    this.afAuth.auth.signOut()
      .then( () => {
        this.router.navigate(['/login']).then(() => {
          console.log('Done with logout');
        });
      }).catch( (error) => {
        console.log('This shouldnt happen, Retry..');
    });
  }


}
