import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AiChatService} from '../ai-chat.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  aiChat = new FormGroup({
    msg: new FormControl(''),
  });
  @Input() roomId;
  constructor(private aiChatService: AiChatService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.aiChat.value);
    this.aiChatService.postMessage(this.roomId, this.aiChat.value.msg);
  }

  ngOnChanges(changes: SimpleChanges) {
    const roomId: SimpleChange = changes.roomId;
    console.log(changes);
    console.log('prev value: ', roomId.previousValue);
    console.log('curr value: ', roomId.currentValue);
    this.roomId = roomId.currentValue;
  }

}
