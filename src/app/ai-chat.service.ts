import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  userId = 'rahim';

  constructor(private readonly afs: AngularFirestore) {
  }

  postMessage(roomId: string, msg: any) {
    console.log('In PostMessage', msg);
    return this.afs.collection('ai-chats')
      .doc(roomId)
      .collection('docs')
      .doc('messages')
      .update({
      messages: firestore.FieldValue.arrayUnion({
        message: msg,
        userId: 'rahim'
      })
    });

  }

  getMessages(roomId: string) {
    console.log('In getMessage');
    return this.afs.collection('ai-chats')
      .doc(roomId)
      .collection('docs')
      .doc('messages')
      .snapshotChanges()
      .pipe(
        map( actions => {
          const data: any = actions.payload.data();
          return data.messages;
        })
      );
  }

  getChatRooms(user: string) {

    return this.afs.collection('ai-users')
      .doc(user)
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
