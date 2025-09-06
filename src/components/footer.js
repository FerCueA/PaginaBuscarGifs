import "./footer.css";

export function creaFooter() {
  const footer = document.createElement("footer");
  footer.className = "footerNav";
  footer.innerHTML = `   
        <p>© 2024 Buscador de GIFs. Todos los derechos reservados.</p>
    `;
  return footer;
}
