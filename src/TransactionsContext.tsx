import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode; //essa interface é criada para que o componente TransactionsProvider possa receber children components la no App.js
}

export const TransactionsContext = createContext<Transaction[]>([]);

//o componente e uma estrategia p um codigo mais organizado e eficiente. Aqui entao ocorre:
//1- criacao do contexto; 2- chamada a API; 3- definicao da Interface: os dados vindos da RESPONSE da API
//4- criacao do componente que transmitira esses dados a toda a app

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
