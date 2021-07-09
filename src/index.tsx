import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
  //o mirage tem um banco de dados interno que será usado. A declaração 'models' será realizada para isso. 
  models: {
    transaction: Model,
  },

  seeds(server){
server.db.loadData({
  transactions: [
    {
      id: 1,
      title: 'Freelance de website',
      type: 'deposit',
      category: 'dev',
      amount: 6000,
      createdAt: new Date('2021-02-12 09:00:00')
    },
    {
      id: 2,
      title: 'Aluguel',
      type: 'withdraw',
      category: 'casa',
      amount: 1100,
      createdAt: new Date('2021-02-14 09:00:00')
    },
  ],
})
  },

  routes(){
    this.namespace = 'api'; // 'api' é a pasta que foi definida por mim no arquivo index.tsx na rota de fetch.
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('./transactions',(schema, request) =>{
       const data = JSON.parse(request.requestBody)
       return schema.create('transaction', data); 
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
