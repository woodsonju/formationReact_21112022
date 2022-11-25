import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React Strict Mode est utilisé pour détecter les bogues en mode développement 
  //Nous permet d'écrire du code de meilleure qualité
  <React.StrictMode>
    {/* 
      On import le store redux que venant de créer, on place un provider autour de notre application 
      et transmettons le store en tant que 'props' <Provider store={store}>
      Desormais, le store est disponible pour tous les components du provider 
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
