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
  openModal: boolean
  pagesQuantity: number
  fetchTransactions: (query: string) => Promise<void>
  fetchTransactionsPerPage: (page: number) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  setModalOpenStatus: () => void
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [pagesQuantity, setPagesQuantity] = useState(1)

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
        _limit: 5,
      },
    })
    setPagesQuantity(Math.ceil(Number(response.headers['x-total-count']) / 5))
    setTransactions(response.data)
  }

  async function fetchTransactionsPerPage(page?: number) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        _page: page,
        _limit: 5,
      },
    })
    setTransactions(response.data)
  }

  function setModalOpenStatus() {
    setOpenModal(true)
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
      fetchTransactions()
      setOpenModal(false)
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        openModal,
        pagesQuantity,
        fetchTransactions,
        fetchTransactionsPerPage,
        createTransaction,
        setModalOpenStatus,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
