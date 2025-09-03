import './style.css'
import {crearCardGifs} from './components/gifsCards'
import './components/gifsCards.css';

// IMPORTA LA KEY DESDE OTRO SITIO PARA EVITARLO SUBIR A GITHUB

const API_KEY = import.meta.env.VITE_API_KEY;

//SELECTORES DEL HTML
 const formulario = document.getElementById('formulario-buscador');
 const buscador = document.getElementById('buscador');
 const galeria = document.getElementById('galeriaGifs');


// FUNCION BUSQUEDA 
// creamos la funcion con la palabbra que se ingresa en el "imput" del buscador al cual le asignamos una id de "buscador"

async function buscarGifs(buscador){
    //el endpoint 
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(buscador)}&limit=12`;

    try {

      // GUARDAMOS LA RESPUESTA DE LA API
      const respuesta = await fetch (endpoint);
      // CONVERTIMOS LA RESPUESTA EN UN JSON
      const respuestaJson = await respuesta.json();
      // ASI PODEMOS AVERIGUAR COMO ES LA RESPUESTA DE LOS DATOA DEL JSON
      console.log(respuestaJson);
        // DEVOLVEMOS LA RESPUESTA
      return respuestaJson.data


    } catch (error){
      console.log("Error al buscar gifs:" , error)
      return []
    } ;
};


// cuando se pulsa el boton "buscar" se genera un evento que capturamos dentro de la funcion
formulario.onsubmit = async function (evento){

  // EVITA LA RECARGA DE LA PAGINA AL DARLE AL BOTON"BUSCAR" QUE ES UN SUBMIT
  evento.preventDefault();

  //capturamos el valor del imput del buscador y lo asignamos a una constante
  const textoBuscador = buscador.value;
  //la cual usamos para buscar con el texto en la funcion de buscar los gifs que difinimos anteriormente
  const gifs = await buscarGifs(textoBuscador);
// borra todo el contenido por si buscamos otro gifs diferente y no se quede en pantlla.
  galeria.innerHTML = '';

// hacemos un foreach para mostar los gifs que encontro la funcion
// y luego le decimos que hacer con ese reusltado para cada gif que enoctramos en este caso
//llamamos al componente de las card que tenemos en componentes
  gifs.forEach(gif => {
    const card = crearCardGifs(gif);
    galeria.appendChild(card);
  });

};
