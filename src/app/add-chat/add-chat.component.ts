import {Component, Input, OnInit} from '@angular/core';
import {AiChatService} from '../ai-chat.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.css']
})
export class AddChatComponent implements OnInit {
  newChat = new FormGroup({
    chatName: new FormControl(''),
  });
  userId: string;
  chatName: string;
  users = [];

  constructor(private chatService: AiChatService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      console.log('Router Params', params);
      this.userId = params.userId;
    });
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
        this.router.navigate(['../room', {roomId, userId: this.userId}], {relativeTo: this.route} );
      }).catch((error) => {
        console.log('failed to create chat room');
    });
  }

  onInvite(user) {
    this.chatService.createChatRoom(this.userId, user).then( (roomId) => {
      this.chatService.addActions(user,
        {userId: this.userId, roomId, chatName: this.userId, accepted: false})
        .then( (data) => {
          console.log('updated Invites..', data);
        });
    });

  }
}
