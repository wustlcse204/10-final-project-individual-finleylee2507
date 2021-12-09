import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { FavoritesContext, FavoritesContextProvider } from './store/favorites-context'



ReactDOM.render(
  <FavoritesContextProvider>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    <HashRouter>
      <App/>
    </HashRouter>

  </FavoritesContextProvider>
  ,
  document.getElementById('root')
);

