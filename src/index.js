import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Destructuring } from './components/Destructuring'

ReactDOM.render(
    <div>
      <h1>Hola desde react xD</h1>
      <Destructuring title="Soy el titulo" content="soy contenido see!"/>
    </div>,
  document.getElementById('root')
);
