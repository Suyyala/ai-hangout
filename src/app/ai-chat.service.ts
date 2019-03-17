import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  chatRoom: any;
  aiChats: any;
  userId = 'rahim';

  constructor(private readonly afs: AngularFirestore) {
  }

  postMessage(message: any) {
    console.log('In PostMessage', message);
    this.chatRoom.update(message);
  }

  getMessage() {
    console.log('In getMessage');
  }

  getChatRooms() {

    return this.afs.collection('ai-users')
      .doc('rahim')
      .collection('docs')
      .doc('chat-rooms')
      .snapshotChanges()
      .pipe(
        map(actions => {
          const data: any = actions.payload.data();
          console.log(data);
          return data.rooms;
        }),
      );
  }

  getUsers() {

  }
}
