import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import {app} from "./firebase.config"
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

