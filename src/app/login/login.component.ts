import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router,
              private authService: AuthService,
              private chatService: AiChatService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {}

  onVerifyDone(event) {
    console.log('onVerifyDone');
    const userId = event.valueOf();
    if (!userId) {
      this.router.navigate(['/login']).then( () => {});
      return;
    }
    this.chatService.getUser(userId).subscribe( (doc) => {
      if (doc.exists) {
        this.router.navigate(['/ai-chat', userId]).then(() => {
        });
      } else {
        this.router.navigate(['/signup', userId]).then( () => {});
      }
    });


  }
}
