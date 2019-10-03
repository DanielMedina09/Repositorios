import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ruta1Component } from './RUTAS/ruta1/ruta1.component';
import { Ruta2Component } from './RUTAS/ruta2/ruta2.component';
import { Ruta3Component } from './RUTAS/ruta3/ruta3.component';
import { AComponent } from './COMPONENTES/a/a.component';
import { BComponent } from './COMPONENTES/b/b.component';
import {  MiservicioService } from './miservicio.service';

@NgModule({
  declarations: [
    AppComponent,
    Ruta1Component,
    Ruta2Component,
    Ruta3Component,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
