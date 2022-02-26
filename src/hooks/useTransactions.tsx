import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionDataInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionDataInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>(
    [] as ITransaction[]
  );

  useEffect(() => {
    api.get('transactions').then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionDataInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used within a TransactionsProvider'
    );
  }

  return context;
}
