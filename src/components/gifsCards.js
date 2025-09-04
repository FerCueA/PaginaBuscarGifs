// Este archivo define el componente visual para mostrar cada GIF en una "card".
// La función crearCardGifs recibe un objeto gif y devuelve un elemento HTML listo para mostrar.

export function crearCardGifs(gif) {
    // Creamos el contenedor principal de la card (un div con clase 'card')
    const card = document.createElement('div');
    card.className = 'card';

    // Creamos el elemento de imagen donde se mostrará el GIF animado
    const img = document.createElement('img');
    img.src = gif.images.fixed_width.url; // Usamos la URL del GIF en tamaño fijo
    img.alt = gif.title; // Usamos el título como texto alternativo para accesibilidad

    // Creamos el elemento para mostrar el título del GIF debajo de la imagen
    const titulo = document.createElement('div');
    titulo.className = 'card-title'; // Clase para aplicar estilos al título
    titulo.textContent = gif.title;  // Mostramos el título que viene de la API

    // Añadimos la imagen y el título al contenedor principal (card)
    card.appendChild(img);    // Primero la imagen
    card.appendChild(titulo); // Luego el título

    // Devolvemos la card lista para ser añadida a la galería
    return card;
}