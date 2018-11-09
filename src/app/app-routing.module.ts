import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdministradorComponent} from './login/administrador/administrador.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'chat' , component: ChatComponent },
  {path:'administrador', component:AdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
