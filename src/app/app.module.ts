import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { ChatComponent } from './chat/chat.component';
import {AngularFirestore} from '@angular/fire/firestore';
import { AiChatRoomsComponent } from './ai-chat-rooms/ai-chat-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    AiChatComponent,
    LoginComponent,
    PhoneLoginComponent,
    ChatComponent,
    AiChatRoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
