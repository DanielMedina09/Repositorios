import { Component} from '@angular/core';
import {  MiservicioService } from './miservicio.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Router';
  varx:string;
  constructor(private servicios:MiservicioService){

  }
}
