import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AiChatService} from '../ai-chat.service';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  chatRooms: any;
  @Output() roomSelected = new EventEmitter<string>();
  roomId = 'room1';
  userId = 'rahim';

  constructor(private chatService: AiChatService) { }

  ngOnInit() {
    this.chatService.getChatRooms(this.userId)
      .subscribe( (rooms) => {
        this.chatRooms = rooms;
      });
  }

  onSelected(roomId: string) {
    this.roomId = roomId;
    this.roomSelected.emit(roomId);
  }
}
