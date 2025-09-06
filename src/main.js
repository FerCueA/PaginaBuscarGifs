
// IMPORTAMOS LAS DEPDENDENCIAS
import './style.css'
import { crearCardGifs } from './components/gifsCards';
import './components/gifsCards.css';

// Obtenemos la API key desde las variables de entorno (.env)
// Así evitamos subir la clave privada al repositorio
const API_KEY = import.meta.env.VITE_API_KEY;

// Seleccionamos los elementos principales del HTML
const formulario = document.getElementById('formulario-buscador'); // Formulario de búsqueda
const buscador = document.getElementById('buscador'); // Input donde el usuario escribe
const galeria = document.getElementById('galeriaGifs'); // Contenedor donde se muestran los GIFs



// Crea la URL (endpoint) para buscar GIFs en la API de Giphy
// Recibe la clave y el término de búsqueda, y devuelve la URL lista para usar
function crearEndpoint(apiKey, termino) {
  return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(termino)}&limit=12`;
}

// Busca GIFs en la API usando el término que escribe el usuario
// Devuelve un array de GIFs o [] si hay error
async function buscarGifs(termino){
  const endpoint = crearEndpoint(API_KEY, termino);
  try {
    const respuesta = await fetch(endpoint); // Pedimos los datos a la API
    const respuestaJson = await respuesta.json(); // Convertimos la respuesta a JSON
    console.log(respuestaJson); // Mostramos la respuesta completa en consola para aprender su estructura
    return respuestaJson.data; // Devolvemos solo el array de GIFs y lo agregamos en "termino"
  } catch (error){
    console.log("Error al buscar gifs:", error);
    return [];
  }
}




// Cuando el usuario envía el formulario (pulsa "Buscar"), se ejecuta esta función
formulario.onsubmit = async function (evento) {
  evento.preventDefault(); // Evita que la página se recargue
  const textoBuscador = buscador.value;// Tomamos el texto que el usuario escribió en el input
  const gifs = await buscarGifs(textoBuscador);// Buscamos los GIFs usando la función creada arriba
  galeria.innerHTML = '';  // Limpiamos la galería antes de mostrar los nuevos resultados
  
  // Recorremos el array de GIFs y mostramos cada uno usando el componente de la card
  gifs.forEach(gif => {
      const esFavorito = favoritos.includes(gif.id);
      const card = crearCardGifs(gif, esFavorito, toggleFavorito); // Creamos la card para cada GIF
      galeria.appendChild(card);       // Añadimos la card a la galería
  });
};


let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(favId => favId !== id);
    console.log(`Quitado de favoritos: ${id}`);
  } else {
    favoritos.push(id);
    console.log(`Añadido a favoritos: ${id}`);
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}