import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AiChatComponent} from './ai-chat/ai-chat.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {PhoneLoginComponent} from './phone-login/phone-login.component';
import {ChatComponent} from './chat/chat.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {ChatRoomsComponent} from './chat-rooms/chat-rooms.component';
import {ChatMessagesComponent} from './chat-messages/chat-messages.component';
import {AddChatComponent} from './add-chat/add-chat.component';
import {SignupComponent} from './signup/signup.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    AiChatComponent,
    LoginComponent,
    PhoneLoginComponent,
    ChatComponent,
    ChatRoomsComponent,
    ChatMessagesComponent,
    AddChatComponent,
    SignupComponent,
    UserActionsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppMaterialModule,
    LayoutModule,
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
