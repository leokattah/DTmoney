import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer} from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api'; // 'api' é a pasta que foi definida por mim no arquivo index.tsx na rota de fetch.
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amout: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
