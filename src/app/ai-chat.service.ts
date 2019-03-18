import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  chatRoom: any;
  aiChats: any;
  userId = 'rahim';

  constructor(private readonly afs: AngularFirestore) {
  }

  postMessage(msg: any) {
    console.log('In PostMessage', msg);
    const chatRoomRef = this.afs.collection('ai-chats')
      .doc('room1')
      .collection('docs')
      .doc('messages');
    chatRoomRef.update({
      messages: firestore.FieldValue.arrayUnion({
        message: msg,
        userId: 'rahim'
      })
    }).then( () => {
      console.log('msg posted successfully');
    }).catch( (error) => {
      console.log('failed to post msg', error);
    });

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
