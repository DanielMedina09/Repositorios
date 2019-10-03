import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ruta1Component } from './RUTAS/ruta1/ruta1.component';
import { Ruta2Component } from './RUTAS/ruta2/ruta2.component';
import { Ruta3Component } from './RUTAS/ruta3/ruta3.component';


const routes: Routes = [
  {
    path: 'ruta1',
    component: Ruta1Component
  },
  {
    path: 'ruta2',
    component: Ruta2Component
  },
  {
    path: 'ruta3',
    component: Ruta3Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
