import { Component, OnInit } from '@angular/core';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-ai-chat-rooms',
  templateUrl: './ai-chat-rooms.component.html',
  styleUrls: ['./ai-chat-rooms.component.css']
})
export class AiChatRoomsComponent implements OnInit {

  chatRooms: any;

  constructor(private chatService: AiChatService) { }

  ngOnInit() {
    this.chatService.getChatRooms()
      .subscribe( (rooms) => {
        this.chatRooms = rooms;
      });
  }

}
