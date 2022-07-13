import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Proceso de creación de una app con REACT
 * Para crear un nuevo proyecto con REACT:  npx create-react-app my-first-react-app
 * App.js -> contenido de la aplicación
 * App.css -> estilo del contenido
 * index.css -> estilos globales
 * index.js -> lógica de la aplicación. La constante root es llamada desde public/index.html. Ver comentarios en index.js 
 * 
 * COMANDOS PARA EL TERMINAL
 * npm start: Inicia el servidor
 * npm run build: Empaqueta la app en fichero estatítcos para producción
 * npm test: Correr test
 * npm run eject: Eliminar la herramienta y las copias de los ficheros estáticos. 
 */

const root = ReactDOM.createRoot(document.getElementById('root')); //toma el elemento root de "public/index.hmtl"
//en dicho elemento root, realizada el renderizado de la aplicación, es decir, del contenido de app.js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
