import React from 'react' //Importa el modo estricto de React
import ReactDOM from 'react-dom/client' //Importa el DOM de React para poder renderizar la app 
import { ProyectoGif } from './ProyectoGif' //Importa el componente ProyectoGif desde el archivo ProyectoGif.jsx
import './styles.css' //Importa los estilos CSS


// Renderiza el componente ProyectoGif dentro del elemento con id 'root'
// Utiliza React.StrictMode para ayudar a identificar posibles problemas en la aplicación durante el desarrollo puede verse las advertencias en la consola
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ProyectoGif />
  </React.StrictMode>,
)
