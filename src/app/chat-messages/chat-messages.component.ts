import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit, OnChanges {

  messages: any;
  @Input() roomId;

  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {
    console.log('current chat room:', this.roomId);
  }

  ngOnChanges(changes: SimpleChanges) {
    const roomId: SimpleChange = changes.roomId;
    console.log(changes);
    console.log('prev value: ', roomId.previousValue);
    console.log('curr value: ', roomId.currentValue);
    this.roomId = roomId.currentValue;
    if (this.roomId) {
      this.aiChatService.getMessages(this.roomId)
      .subscribe( (messages: any) => {
        this.messages = messages;
      });
    }
  }

}
