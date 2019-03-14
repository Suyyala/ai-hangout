import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
  styleUrls: ['./ai-chat.component.css']
})
export class AiChatComponent implements OnInit {

  aiChat = new FormGroup({
    msg: new FormControl(''),
  });

  userName: string;
  @Input()
  get user() {
    return this.userName;
  }
  set user(val) {
    this.userName = val;
    this.userChanged.emit(this.userName);
  }
  @Output() userChanged = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('This is user', this.user);
  }

  doLogout() {
    this.router.navigate(['/login']).then(() => {
      console.log('Done with logout');
    });
  }

  onSubmit() {
    console.log(this.aiChat.value);
  }

}
