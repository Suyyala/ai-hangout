import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  chatRoom: any;

  constructor(private angularFireStore: AngularFirestore) {
    // this.chatRoom = this.angularFireStore.doc<any>('messages');
  }

  postMessage(message: any) {
    console.log('In PostMessage', message);
    this.chatRoom.update(message);
  }

  getMessage() {
    console.log('In getMessage');
  }
}
