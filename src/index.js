import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./App";
import { Destructuring } from './components/Destructuring'

ReactDOM.render(
    <div>
      <App />
      <Destructuring title="Soy el titulo" content="soy contenido see!"/>
    </div>,
  document.getElementById('root')
);
