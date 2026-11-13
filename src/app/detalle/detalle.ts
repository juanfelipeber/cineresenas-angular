import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { peliculas, comentarios, Pelicula, Comentario } from '../peliculas.data';

@Component({
  selector: 'app-detalle',
  imports: [FormsModule, RouterLink],
  templateUrl: './detalle.html'
})
export class Detalle {
  pelicula?: Pelicula;
  nombre = '';
  texto = '';

  constructor(private ruta: ActivatedRoute) {
    // Se lee el número que viene en la URL (pelicula/:id)
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.pelicula = peliculas.find(p => p.id === id);
  }

  get lista(): Comentario[] {
    return this.pelicula ? comentarios[this.pelicula.id] : [];
  }

  comentar(): void {
    if (this.pelicula && this.nombre.trim() && this.texto.trim()) {
      comentarios[this.pelicula.id].push({
        nombre: this.nombre.trim(),
        texto: this.texto.trim()
      });
      this.nombre = '';
      this.texto = '';
    }
  }
}
