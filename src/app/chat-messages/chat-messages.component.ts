import {Component, Input, OnInit} from '@angular/core';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  messages: any;
  @Input() roomId = 'room2';

  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {
    console.log('current chat room:', this.roomId);
    this.aiChatService.getMessages(this.roomId)
      .subscribe( (messages: any) => {
        this.messages = messages;
      });
  }

}
