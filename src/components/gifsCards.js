export function crearCardGifs(gif){

    // CREACION DE LA CARD CON UNA DIV Y UNA CLASE ASOCIADO PARA PODER ACCEDER A LA CLASE
    const card = document.createElement('div')
    card.className='card'

    //CRECAION DE LA "IMG" QUE ES DONDE ALOGAREMOS EL GIF BUSCADO

    const img = document.createElement('img')
    img.src = gif.images.fixed_width.url
    img.alt = gif.title

    // CREACION DEL TITULO DEL GIF 

    const titulo = document.createElement('div');
    titulo.className = 'card-title';
    titulo.textContent = gif.title;

    // ORDEN DE CARGA DE LAS "CREACIONES"
    card.appendChild(img);
    card.appendChild(titulo);

    return card;
}