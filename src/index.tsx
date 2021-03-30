import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'SEF',
          type: 'withdraw',
          category: 'Burocracy',
          amount: 100,
          createdAt: new Date('2020-11-12 14:23:00'),
        },
        {
          id: 3,
          title: 'Lex lab',
          type: 'deposit',
          category: 'Dev',
          amount: 9500,
          createdAt: new Date('2021-05-02 18:07:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'; //aqui ta escrito API pq foi oq pus como URL no fetch que fiz na Table

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

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
