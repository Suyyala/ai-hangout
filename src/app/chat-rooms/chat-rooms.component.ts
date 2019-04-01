import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AiChatService} from '../ai-chat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  chatRooms = [];
  roomId: string;
  userId: string;

  constructor(private chatService: AiChatService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('Router Params', params);
      this.userId = params.userId;
      this.chatService.getChatRooms(this.userId)
        .subscribe( (rooms) => {
          this.chatRooms = rooms;
        });
    });
  }

  onSelected(roomId: string) {
    this.roomId = roomId;
    this.router.navigate(['room',
      {roomId: this.roomId, userId: this.userId}], {relativeTo: this.route})
      .then( (data) => {
        console.log('navigated to specific room', data);
      });
  }
}
