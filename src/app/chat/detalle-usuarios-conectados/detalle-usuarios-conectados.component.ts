import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle-usuarios-conectados',
  templateUrl: './detalle-usuarios-conectados.component.html',
  styleUrls: ['./detalle-usuarios-conectados.component.scss']
})
export class DetalleUsuariosConectadosComponent implements OnInit {

  @Input() tamanioVentana:string;

  constructor() { }

  ngOnInit() {
  }

}
