import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AiChatService} from '../ai-chat.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  aiChat = new FormGroup({
    msg: new FormControl(''),
  });
  @Input() roomId;
  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.aiChat.value);
    this.aiChatService.postMessage(this.roomId, this.aiChat.value.msg);
  }

}
