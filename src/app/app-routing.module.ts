import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AiChatComponent} from './ai-chat/ai-chat.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {SignupComponent} from './signup/signup.component';
import {ChatRoomsComponent} from './chat-rooms/chat-rooms.component';
import {ChatMessagesComponent} from './chat-messages/chat-messages.component';
import {AddChatComponent} from './add-chat/add-chat.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup/:userId', component: SignupComponent, canActivate: [AuthGuard]},
  {path: 'ai-chat/:userId', component: AiChatComponent, canActivate: [AuthGuard],
  children: [
    {path: '', component: ChatRoomsComponent},
    {path: 'room', component: ChatMessagesComponent},
    {path: 'newChat', component: AddChatComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
