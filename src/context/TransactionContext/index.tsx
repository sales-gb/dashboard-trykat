import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../../lib/axios'

interface ITransaction {
  id: number
  date: string
  value: string
  category: string
}

interface ICreateTransaction {
  date: string
  value: string
  category: string
}

interface IEditTransaction {
  id?: number
  date?: string
  value?: string
  category?: string
}

interface ITransactionsContextType {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: ICreateTransaction) => Promise<void>
  updateTransaction: (data: IEditTransaction) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
}

interface ITransactionContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({ children }: ITransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = useCallback(async () => {
    const res = await api.get('/transactions')

    setTransactions(res.data)
  }, [])

  const createTransaction = useCallback(async (data: ICreateTransaction) => {
    const { category, value, date } = data

    const res = await api.post('/transactions', {
      category,
      value,
      date,
    })

    setTransactions((state) => [res.data, ...state])
  }, [])

  const updateTransaction = useCallback(
    async (data: IEditTransaction) => {
      const { id, ...rest } = data

      await api.patch(`/transactions/${id}`, rest)

      setTransactions(
        transactions.map((transaction) =>
          transaction.id === id ? { ...transaction, ...rest } : transaction,
        ),
      )
    },
    [transactions],
  )

  const deleteTransaction = useCallback(
    async (id: number) => {
      await api.delete(`/transactions/${id}`)
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id),
      )
    },
    [transactions],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
