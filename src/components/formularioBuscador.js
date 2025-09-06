import "./formularioBuscador.css";

export function crearFormularioBuscador() {
  const form = document.createElement("form");
  form.id = "formulario-buscador";
  form.className = "formulario-buscador";
  form.innerHTML = `
    <input 
      type="text" 
      id="buscador" 
      placeholder="Buscar GIFs..." 
      autocomplete="off"
    />
    <button type="submit">Buscar</button>
  `;
  return form;
}
