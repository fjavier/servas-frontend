import { Component, OnInit, HostListener } from '@angular/core';
import { Mensaje } from '../model/Mensaje';
import {LoginService} from '../login/login.service';
import {Cliente} from '../model/Cliente';
import {Administrador} from '../model/Administrador';
import {isNullOrUndefined} from 'util';
import { Router} from '@angular/router';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  alturaPantalla:number;
  porcentajeRestar:number= 0.35;
  dimensionContenedorMensajes:string;
  mensaje:Mensaje ={username:"", mensaje:""};
  mensajes:Mensaje[] =[
  ];

  usuarioActual: Cliente | Administrador;
  private endPointChat = 'http://localhost:8080/chatroom';
  private stompClient;

  constructor(private router:Router, private loginService:LoginService) {
  }

  ngOnInit() {
    this.usuarioActual = this.loginService.getUsuarioActual();
    if(isNullOrUndefined(this.usuarioActual)){
      this.goHome();
    }
    this.alturaPantalla = window.screen.height;
    this.setDimensionContenedorMensajes(this.calcularTamanioPantalla());
    this.inicializarWebSocket();
  }

  inicializarWebSocket(){
    var ws = new SockJS(this.endPointChat);
    this.stompClient = Stomp.over(ws);
    var that = this;
    this.stompClient.connect({username:that.usuarioActual.nombre,password:'123qweasd'}, function (frame){
      that.stompClient.subscribe('/topic/chatroom', function(mensajeRecibido) {
        that.mensajes.push(JSON.parse(mensajeRecibido.body));
      })
    });
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
      this.stompClient.send(
        "/app/chatroom",
        {},
        JSON.stringify({mensaje:this.mensaje.mensaje, username:this.usuarioActual.nombre}));
      this.mensaje = new Mensaje();
    }

  }
}
