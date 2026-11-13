import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { peliculas, Pelicula } from '../peliculas.data';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, RouterLink],
  templateUrl: './inicio.html'
})
export class Inicio {
  texto = '';
  genero = 'todos';

  // Películas ordenadas por fecha, de la más nueva a la más vieja
  todas: Pelicula[] = [...peliculas].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );

  get filtradas(): Pelicula[] {
    const busqueda = this.texto.toLowerCase().trim();
    return this.todas.filter(p =>
      p.titulo.toLowerCase().includes(busqueda) &&
      (this.genero === 'todos' || p.genero === this.genero)
    );
  }
}