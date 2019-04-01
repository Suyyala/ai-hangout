import {Component,  OnInit} from '@angular/core';
import {AiChatService} from '../ai-chat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  messages: any;
  roomId: string;
  userId: string;

  constructor(private aiChatService: AiChatService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('current chat room:', this.roomId);
    this.route.params.subscribe((params) => {
      console.log('Router Params', params);
      this.roomId = params.roomId;
      this.userId = params.userId;
      this.aiChatService.getMessages(this.roomId)
        .subscribe( (messages: any) => {
          this.messages = messages;
        });
    });
  }

}
