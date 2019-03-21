import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  user: any;
  room;

  constructor(private router: Router,
              private afAuth: AngularFireAuth ) { }

  ngOnInit() {
    console.log('This is user', this.user);
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

  onRoomSelected(event) {
    this.room = event.valueOf();
    console.log(this.room);
  }


}
