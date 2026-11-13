//script central de peliculas
export interface Pelicula {
  id: number;
  titulo: string;
  fecha: string;
  genero: string;
  director: string;
  actores: string[];
  calificacion: number;
  sinopsis: string;
  resena: string;
  imagen: string;
}

export interface Comentario {
  nombre: string;
  texto: string;
}

export const peliculas: Pelicula[] = [
  {
    id: 1,
    titulo: 'Oppenheimer',
    fecha: '2023-07-21',
    genero: 'Drama',
    director: 'Christopher Nolan',
    actores: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
    calificacion: 8.5,
    sinopsis: 'La película cuenta la historia de J. Robert Oppenheimer, el científico que lideró el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.',
    resena: 'Es una película larga pero muy bien actuada. Muestra el lado científico y también el lado humano del personaje, y la música ayuda mucho a crear tensión.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWQyiGrHTzbPTwd5RBY-GcYkLlqDj4F38X2aXHZyHayIlOwyWlejhIq0&s=10'
  },
  {
    id: 2,
    titulo: 'Dune: Parte Dos',
    fecha: '2024-03-01',
    genero: 'Ciencia ficción',
    director: 'Denis Villeneuve',
    actores: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    calificacion: 8.8,
    sinopsis: 'Paul Atreides se une a los Fremen en el planeta Arrakis para buscar venganza contra los que destruyeron a su familia.',
    resena: 'Tiene unos efectos visuales muy buenos y unos paisajes impresionantes. La historia avanza con calma pero al final se vuelve muy emocionante.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbOV6nJHjtbHp6qNnqzSr7BSUY9nYO8akKYk6Np6HvNEdsSsCPiUBtQg&s=10'
  },
  {
    id: 3,
    titulo: 'Intensamente 2',
    fecha: '2024-06-14',
    genero: 'Animación',
    director: 'Kelsey Mann',
    actores: ['Amy Poehler', 'Maya Hawke', 'Phyllis Smith'],
    calificacion: 8.0,
    sinopsis: 'Riley ya es una adolescente y aparecen emociones nuevas como la ansiedad, que cambian por completo lo que pasa en su mente.',
    resena: 'Es una película divertida y también muy tierna. Sirve para todas las edades porque habla de las emociones de una forma sencilla de entender.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgsoELvORBxxvRHFydYFIeJcyrguinPmg35NvYyJGNnBiFI4_tBNLOMw&s=10'
  },
  {
    id: 4,
    titulo: 'Parásitos',
    fecha: '2019-05-30',
    genero: 'Thriller',
    director: 'Bong Joon-ho',
    actores: ['Song Kang-ho', 'Choi Woo-shik', 'Park So-dam'],
    calificacion: 9.0,
    sinopsis: 'Una familia pobre se las ingenia para trabajar en la casa de una familia rica, pero las cosas se complican con el paso de los días.',
    resena: 'Mezcla humor, suspenso y crítica social. Tiene un giro en la mitad que sorprende bastante y por eso ganó el premio Óscar a mejor película.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rgC4C1xe_TnmUoYnnVJIl6Yjoqi8DTbFsw8-9T9YGxYk8yLl7v4oLMI&s=10'
  }
];

// Aquí se guardan los comentarios de cada película mientras la página está abierta
export const comentarios: Record<number, Comentario[]> = { 1: [], 2: [], 3: [], 4: [] };