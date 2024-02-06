import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'

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
  isLoading: boolean
  setTransactions: React.Dispatch<React.SetStateAction<ITransaction[]>>
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
  const [isLoading, setLoading] = useState<boolean>(false)

  const fetchTransactions = useCallback(async () => {
    setLoading(true)
    try {
      setTimeout(async () => {
        const res = await api.get('/transactions')
        console.log('Dados recebidos:', res.data)
        setTransactions(res.data)
        setLoading(false)
      }, 2000)
    } catch (error) {
      console.error('Erro ao buscar transações:', error)
    }
  }, [])

  const createTransaction = useCallback(async (data: ICreateTransaction) => {
    setLoading(true)

    try {
      setTimeout(async () => {
        const { category, value, date } = data
        const res = await api.post('/transactions', {
          category,
          value,
          date,
        })
        setTransactions((state) => [res.data, ...state])
        toast.success('Transação criada com sucesso! =)')
      }, 2000)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao criar transação:', error)
      toast.success('Ops! algo deu errado ao criar uma nova transação =(')
    }
  }, [])

  const updateTransaction = useCallback(
    async (data: IEditTransaction) => {
      setLoading(true)
      try {
        setTimeout(async () => {
          const { id, ...rest } = data
          await api.patch(`/transactions/${id}`, rest)
          setTransactions(
            transactions.map((transaction) =>
              transaction.id === id ? { ...transaction, ...rest } : transaction,
            ),
          )
          toast.success('Transação alterada com sucesso! =)')
        }, 2000)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao atualizar transação:', error)
        toast.success('Ops! algo deu errado ao editar essa transação =(')
      }
    },
    [transactions],
  )

  const deleteTransaction = useCallback(
    async (id: number) => {
      setLoading(true)

      try {
        setTimeout(async () => {
          await api.delete(`/transactions/${id}`)
          setTransactions(
            transactions.filter((transaction) => transaction.id !== id),
          )
          toast.success('Transação excluída com sucesso! =)')
        }, 2000)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao deletar transação:', error)
        toast.success('Ops! algo deu errado ao excluir essa transação =(')
      }
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
        isLoading,
        setTransactions,
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
