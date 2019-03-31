import {Component, Input, OnInit} from '@angular/core';
import {AiChatService} from '../ai-chat.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit {

  @Input() userId: string;
  private invites = [];

  constructor(private chatService: AiChatService) { }

  ngOnInit() {
    if (this.userId) {
      this.chatService.getActions(this.userId)
        .subscribe( (actions) => {
          this.invites = actions.invites;
        });
    }
  }

  onAccept(invite) {
    console.log(invite.userId, invite.roomId, invite.chatName);
    this.chatService.joinChatRoom(this.userId, invite.roomId, invite.chatName)
      .then( () => {
        console.log('Joined Room..', invite);
        invite.accepted = true;
        this.invites.map( (element) => {
          if (element.roomId === invite.roomId &&
           element.userId === invite.userId) {
            element.accepted = true;
          }
          return element;
        });
        this.chatService.updateActions(this.userId, this.invites).then( (data) => {
          console.log('update actions to be accepted', data);
        }).catch( (error) => {
          console.log('This shouldnt happen', error);
        });
      });
  }
}
