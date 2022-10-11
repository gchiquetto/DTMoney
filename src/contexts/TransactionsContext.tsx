import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface TransactionsContextProviderProps {
  children: ReactNode
}

interface Transaction {
  id: number
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, value, category, type } = data
      const response = await api.post('transactions', {
        description,
        value,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
