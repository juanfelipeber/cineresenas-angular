import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html'
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;

  enviar(): void {
    this.enviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}