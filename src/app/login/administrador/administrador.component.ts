import { Component, OnInit } from '@angular/core';
import {Administrador} from '../../model/Administrador';
import {LoginService} from '../login.service';
import {IngresoChatInterface} from '../ingreso-chat';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit, IngresoChatInterface{

  administrador:Administrador = new Administrador();

  constructor(private loginService:LoginService) {
  }

  ngOnInit() {
    this.administrador.username='fbriceno';
    this.administrador.password ='123';
    this.administrador.nombre = "Administrador Fbriceno";
    this.administrador.esAdministrador = true;
  }

  doLogin(): void {
    this.loginService.doLogin(this.administrador);
  }
}
