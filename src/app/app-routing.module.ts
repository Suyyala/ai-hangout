import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AiChatComponent} from './ai-chat/ai-chat.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path: 'ai-chat', component: AiChatComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
