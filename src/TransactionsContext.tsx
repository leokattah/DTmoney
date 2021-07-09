import {createContext, useState, useEffect, ReactNode} from 'react';
import {api} from './services/api';


interface Transaction{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionInput{
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction:  (transaction: TransactionInput) => Promise<void>;
}

// A criação do contexto tem a finalidade de passar dados para qualquer componente da aplicação, independente de onde o componente esteja. 
export const TransactionsContext =  createContext<TransactionsContextData>(
  {  } as TransactionsContextData
  );

// mas para os componentes terem acesso a estes dados é necessário colocar por voltar um prodiver. 

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
  const response = await api.post('/transactions', {
    ...transactions,
    createdAt: new Date()
  })
  const { transaction } = response.data;

  setTransactions([
    ...transactions, 
    transaction
  ]);
}

  return(
    <TransactionsContext.Provider value={ { transactions, createTransaction } }>
      {children}
    </TransactionsContext.Provider>
  )
};
