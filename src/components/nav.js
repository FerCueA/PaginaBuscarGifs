import "./nav.css";

export function crearNav() {
  const nav = document.createElement("nav");
  nav.className = "navbar";
  nav.innerHTML = `
        <div class="nav-container">
            <a href="#" class="nav-logo">Buscador de GIFs</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Favoritos</a></li>
                <li class="nav-item"><a href="acerca.html" class="nav-link">Acerca de</a></li>
                <li class="nav-item"><a href="https://github.com/FerCueA/PaginaBuscarGifs" class="nav-link" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
        </div>
    `;
  return nav;
}
