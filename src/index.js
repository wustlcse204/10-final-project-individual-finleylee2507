import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { FavoritesContextProvider } from './storage/favorites-context'
import { CurrentSetContextProvider } from './storage/current-set-context';



ReactDOM.render(



  <FavoritesContextProvider>
    <CurrentSetContextProvider>

      <HashRouter >
        <App />
      </HashRouter>
    </CurrentSetContextProvider>
  </FavoritesContextProvider>





  ,
  document.getElementById('root')
);

