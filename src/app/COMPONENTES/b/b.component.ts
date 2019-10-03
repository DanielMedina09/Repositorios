import { Component, OnInit } from '@angular/core';
import {  MiservicioService } from '../../miservicio.service';

@Component({
  selector: 'bcomponente',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  public vary:string="";

  constructor(private servicios:MiservicioService){

  }

  leer(){
    this.vary= this.servicios.texto;
  }
  escribir(){
    this.servicios.texto="Muy Bien y tu";
  }
  ngOnInit() {
  }

}
