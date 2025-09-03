# Buscador de GIFs con Giphy API

Este proyecto fue desarrollado de forma autodidacta por mí y para mi, con el objetivo de aprender a conectarme a una API pública, procesar los datos y mostrar resultados.


## ¿Qué aprendí?
- Consumir una API.
- Mostrar resultados en el navegador.
- Organizar el código en componentes.
- Proteger claves privadas usando .env
- Usar herramientas como Vite para crear el proyecto.

## ¿Cómo funciona?
El usuario escribe una palabra en el buscador y la aplicación muestra los GIFs relacionados usando la API de Giphy.

## Requisitos
- Node.js y npm instalados.
- Clave de API de Giphy.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/FerCueA/PaginaBuscarGifs.git
   cd PaginaBuscarGifs
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz del proyecto y añade tu clave:
   ```
   VITE_API_KEY=tu_clave_aqui
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Seguridad
La clave de API está protegida porque el archivo `.env` está en `.gitignore` y no se sube al repositorio.


## Demo online

Puedes ver y probar el proyecto desplegado en Netlify aquí:

👉 [https://paginabuscadorgifs.netlify.app/](https://paginabuscadorgifs.netlify.app/)

---

## Ruta de mejoras y versiones

A continuación, detallo el progreso del proyecto cada versión:

- **v1.0**  
  - Búsqueda básica de GIFs usando la API de Giphy.
  - Visualización de resultados en cards sencillas.
  - Uso de variables de entorno para proteger la API key.
  - Estilos básicos con CSS.

- **v1.1 (pendiente)**  
  - Mostrar el título de cada GIF en la card.
  - Mejorar el diseño visual de las cards.
  - Añadir mensajes de error si no hay resultados o la API falla.

- **v1.2 (pendiente)**  
  - Implementar favoritos (guardar GIFs preferidos).
  - Añadir historial de búsquedas.
  - Guardar datos en LocalStorage.

- **v1.3 (pendiente)**  
  - Paginación de resultados.
  - Mostrar más información de cada GIF (usuario, fecha, etc.).
  - Mejorar la accesibilidad y usabilidad.

---

Esta ruta de mejoras refleja mi aprendizaje y evolución como desarrollador.  

---

