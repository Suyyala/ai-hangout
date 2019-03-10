import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AiChatComponent} from './ai-chat/ai-chat.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'ai-chat', component: AiChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
