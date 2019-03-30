import {Component, Input, OnInit} from '@angular/core';
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
  @Input() userId: string;
  chatName: string;
  users = [];

  constructor(private chatService: AiChatService) { }

  ngOnInit() {
    this.chatService.getUsers()
      .subscribe( (docIds: []) => {
        this.users = docIds;
      });
  }


  onNewChat() {
    console.log('creating new chat..', this.newChat.value);
    this.chatName = this.newChat.value.chatName;
    this.chatService.createChatRoom(this.userId, this.chatName)
      .then( (roomId: string) => {
        console.log(roomId);
      }).catch((error) => {
        console.log('failed to create chat room');
    });
  }
}
