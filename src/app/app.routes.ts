import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Detalle } from './detalle/detalle';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'pelicula/:id', component: Detalle },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' }
];