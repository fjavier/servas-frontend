import { Injectable } from '@angular/core';
import {Administrador} from '../model/Administrador';
import {Cliente} from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioActual : Cliente | Administrador;

  doLogin(persona: Cliente | Administrador){
    this.usuarioActual = persona;
  }

  getUsuarioActual() : Cliente | Administrador{
    return this.usuarioActual;
  }
}
