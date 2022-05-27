import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

import App from './components/App';

const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store} >
    <App />
  </Provider>

);

