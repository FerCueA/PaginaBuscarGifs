// AQUI CREAMOS EL COMPONENTE DE LA CARD Y SUS FUNCIONES ASOCIADAS

// COMO VAMOS A HACER UN IMPORT AL MAIN, HACEMOS UNA FUNCION EXPORT PARA CREAR LA CARD

export function crearCardGifs(gif, esFavorito, onToggleFavorito) {

    //CREAMOS LA CARD CON UN DIV  LE ASINGAMOS LA CLASE
    const card = document.createElement('div');
    card.className = 'card';

    // CREAMOS EL ELEMETNTO DONDE VAMOS A INTRUDCIR EL GIF (IMG)
    const img = document.createElement('img');
    img.src = gif.images.fixed_width.url; // TAMAÑO QUE NOS DA LA API
    img.alt = gif.title; // TITULO QUE NOS DA LA API

    // CREAMOS UN DIV CON EL TITULO DEL GID DE LA API
    const titulo = document.createElement('div');
    titulo.className = 'card-title'; 
    titulo.textContent = gif.title;  // ASIGAMOS AL TITULO LO QUE NOS DA LA API

    // CREAMOS UN BOTON PARA AÑADIR A FAVORITOS
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn';
    // AGREGAMOS EL ICONO DE FAVORITO
    favBtn.textContent = esFavorito ? '★' : '☆';
    favBtn.title = esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos';
    // CUANDO SE HAGA CLICK EN EL BOTON, SE LLAMA A LA FUNCION PASADA COMO ARGUMENTO
    favBtn.onclick = () => onToggleFavorito(gif.id);
   
   
    // aAÑADIMOS TODOS LOS DATSO QUE QUEROEMOS MOSTRAR EN LA CARD Y EL ORDEN
    card.appendChild(img);    
    card.appendChild(titulo); 
    card.appendChild(favBtn); 

    //DEVOLVEMOS LA CARD
    return card;
}