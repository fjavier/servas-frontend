import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './login/cliente/cliente.component';
import { CooperativaComponent } from './login/cooperativa/cooperativa.component';
import { AdministradorComponent } from './login/administrador/administrador.component';
import { DetalleUsuariosConectadosComponent } from './chat/detalle-usuarios-conectados/detalle-usuarios-conectados.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    ClienteComponent,
    CooperativaComponent,
    AdministradorComponent,
    DetalleUsuariosConectadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
