import { Component, OnInit } from '@angular/core';
import {AiChatService} from '../ai-chat.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit {
  newChat = new FormGroup({
    chatName: new FormControl(''),
  });

  constructor(private chatService: AiChatService) { }

  ngOnInit() {
  }

  onNewChat() {
    console.log('creating new chat..', this.newChat.value);
    const chatName = this.newChat.value.chatName;
    this.chatService.createChatRoom()
      .then( (roomId: string) => {
        console.log(roomId);
        this.chatService.joinChatRoom('rahim', roomId, chatName)
          .then((data) => {
            console.log('Joined room');
          }).catch((error) => {
            console.log('Failed to Join the room');
        });
      }).catch((error) => {
        console.log('failed to create chat room');
    });
  }
}
