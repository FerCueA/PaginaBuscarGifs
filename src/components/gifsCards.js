export function crearCardGifs(gif){
    const card = document.createElement('div')
    card.className='card'

    const img = document.createElement('img')
    img.src = gif.images.fixed_width.url
    img.alt = gif.title


    const titulo = document.createElement('div');
    titulo.className = 'card-title';
    titulo.textContent = gif.title;


    card.appendChild(img);
    card.appendChild(titulo);

    return card;
}