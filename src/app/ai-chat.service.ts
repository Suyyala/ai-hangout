import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {firestore} from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  constructor(private readonly afs: AngularFirestore) {
  }

  postMessage(roomId: string, userId: string, msg: any) {
    console.log('In PostMessage', msg);
    return this.afs.collection('ai-chats')
      .doc(roomId)
      .collection('docs')
      .doc('messages')
      .update({
      messages: firestore.FieldValue.arrayUnion({
        message: msg,
        userId
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

  createChatRoom(userId: string,
                 chatName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.afs.collection('ai-chats')
        .add({})
        .then((docRef: DocumentReference) => {
          console.log('Created New Room', docRef.id);
          docRef.collection('docs')
            .doc('messages')
            .set({messages: []})
            .then( (msgRef) => {
              console.log('messages document is created', msgRef);
              this.joinChatRoom(userId, docRef.id, chatName)
                .then((data) => {
                  resolve(docRef.id);
                }).catch( (error) => {
                  reject(error);
              });
            }).catch((error) => {
              console.log('failed to create document');
              reject(error);
          });
        }).catch((error) => {
          console.log('failed to create New Room');
          reject(error);
      });
    });
  }

  joinChatRoom(userId: string, roomId: string, chatName: string) {
    console.log('In JoinRoom', userId, roomId);
    return this.afs.collection('ai-users')
      .doc(userId)
      .collection('docs')
      .doc('chat-rooms')
      .update({
        rooms: firestore.FieldValue.arrayUnion({
          chatId: roomId,
          chatName
        })
      });

  }

  createUser(userId: string, userName: string) {
    return new Promise( (resolve, reject) => {
      this.afs.collection('ai-users')
          .doc(userId)
          .set({userName, userId})
        .then(() => {
          this.afs.collection('ai-users')
            .doc(userId)
            .collection('docs')
            .doc('chat-rooms')
            .set({rooms: []})
            .then( () => {
              resolve(true);
            }).catch((error) => {
              reject(error);
          });
      }).catch((error) => {
        reject(error);
      });
      }
    );
  }

  getUser(userId: string) {
    console.log('check user existence: ', userId);
    return this.afs.collection('ai-users')
      .doc(userId)
      .get();
  }

  getUserDetails(userId: string) {
    return this.afs.collection('ai-users')
      .doc(userId)
      .snapshotChanges()
      .pipe(
        map(actions => {
          const data: any = actions.payload.data();
          console.log(data);
          return data.userName;
        }),
      );
  }

  getUsers() {
    return Observable.create( (observer) => {
      this.afs.collection('ai-users')
      .get().subscribe( (querySnap) => {
        const docIds = [];
        querySnap.docs.forEach( (doc) => {
          docIds.push(doc.id);
        });
        observer.next(docIds);
      });
    });
  }
}
