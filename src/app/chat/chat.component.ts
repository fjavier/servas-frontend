import { Component, OnInit, HostListener } from '@angular/core';
import { Mensaje } from '../model/Mensaje';
import {LoginService} from '../login/login.service';
import {Cliente} from '../model/Cliente';
import {Administrador} from '../model/Administrador';
import {isNullOrUndefined} from 'util';
import { Router} from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  alturaPantalla:number;
  porcentajeRestar:number= 0.35;
  dimensionContenedorMensajes:string;
  mensaje:Mensaje ={remitente:"", mensaje:""};
  mensajes:Mensaje[] =[
  ];

  usuarioActual: Cliente | Administrador;

  constructor(private router:Router, private loginService:LoginService) {
  }

  ngOnInit() {
    this.usuarioActual = this.loginService.getUsuarioActual();
    if(isNullOrUndefined(this.usuarioActual)){
      this.goHome();
    }
    this.alturaPantalla = window.screen.height;
    this.setDimensionContenedorMensajes(this.calcularTamanioPantalla());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.alturaPantalla = window.innerHeight;
    this.setDimensionContenedorMensajes(this.calcularTamanioPantalla());
  }

  private goHome(){
    this.router.navigate(['/']);
  }

  private calcularTamanioPantalla():number{
     let tamanioRestar =  this.alturaPantalla * this.porcentajeRestar;
     let tamanioCalculado = this.alturaPantalla - tamanioRestar;
     return tamanioCalculado;
  }

  private setDimensionContenedorMensajes(tamanioCalculado:number){
    this.dimensionContenedorMensajes = Math.round(tamanioCalculado)+'px';
  }

  enviarMensaje(){
    if(this.mensaje.mensaje != "" || this.mensaje.mensaje != undefined){
      this.mensajes.push({remitente: this.usuarioActual.nombre, mensaje: this.mensaje.mensaje});
      this.mensaje = new Mensaje();
    }

  }
}
