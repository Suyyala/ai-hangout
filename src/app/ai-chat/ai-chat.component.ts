import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {
  user: any;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('This is user', this.user);
  }

  doLogout() {
    this.router.navigate(['/login']).then(() => {
      console.log('Done with logout');
    });
  }


}
