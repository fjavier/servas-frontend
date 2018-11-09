import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../model/Cliente';
import {IngresoChatInterface} from '../ingreso-chat';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, IngresoChatInterface{

  cliente = new Cliente();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.cliente.nombre = "Francisco B.";
    this.cliente.identificacion = "0010810890005C";
    this.cliente.esCliente = true;
  }

  doLogin(): void {
    this.loginService.doLogin(this.cliente);
  }
}
