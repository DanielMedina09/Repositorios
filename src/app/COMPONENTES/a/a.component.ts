import { Component, OnInit } from '@angular/core';
import {  MiservicioService } from '../../miservicio.service';

@Component({
  selector: 'acomponente',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  public varx:string="";

  constructor(private servicios:MiservicioService){

  }

  leer(){
    this.varx= this.servicios.texto;
  }
  escribir(){
    this.servicios.texto="Como Estas?";
  }
  ngOnInit() {
  }

}
