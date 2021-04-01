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

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode; //essa interface é criada para que o componente TransactionsProvider possa receber children components la no App.js
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions(
      [
        ...transactions,
        transaction,
      ]
    );
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
//o componente TransactionsProvider e uma estrategia p um codigo mais organizado e eficiente. Aqui entao ocorre:
//1- criacao do contexto; 2- chamada a API; 3- definicao da Interface: os dados vindos da RESPONSE da API
//4- criacao do componente que transmitira esses dados a toda a app
