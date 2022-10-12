import { Summary } from '../../components/Summary'
import { CaretLeft, CaretRight, MagnifyingGlass } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormContainer,
  PageContainer,
  PaginationButton,
  PaginationContainer,
  PaymentHightlight,
  TransactionsContainer,
  TransactionsContent,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useForm } from 'react-hook-form'
import { dateFormatter, valueFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { useEffect, useState } from 'react'

const SearchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof SearchFormSchema>

export function Transations() {
  const [currentPage, setCurrentPage] = useState(1)
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const pagesQuantity = useContextSelector(TransactionsContext, (context) => {
    return context.pagesQuantity
  })

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const fetchTransactionsPerPage = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactionsPerPage
    },
  )

  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
    register,
  } = searchForm

  function handleSearchTransactions({ query }: SearchFormData) {
    fetchTransactions(query)
    reset()
  }

  function handleCurrentPage(operation: 'forward' | 'backward') {
    operation === 'forward'
      ? setCurrentPage((state) => state + 1)
      : setCurrentPage((state) => state - 1)
  }

  useEffect(() => {
    fetchTransactionsPerPage(currentPage)
  }, [currentPage])

  return (
    <TransactionsContainer>
      <Summary />
      <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Search for a transaction"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Search
        </button>
      </FormContainer>
      <TransactionsContent>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PaymentHightlight variant={transaction.type}>
                      {transaction.type === 'income'
                        ? ` ${valueFormatter.format(transaction.value)}`
                        : `- ${valueFormatter.format(transaction.value)}`}
                    </PaymentHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContent>

      {pagesQuantity > 1 && (
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage === 1 && true}
            onClick={() => handleCurrentPage('backward')}
            title="Back button"
          >
            <CaretLeft size={32} />
          </PaginationButton>
          <div>
            {Array.from({ length: pagesQuantity }, (i, index) => (
              <PageContainer
                key={index + 1}
                variant={
                  currentPage === index + 1 ? 'currentPage' : 'notCurrentPage'
                }
              >
                {index + 1}
              </PageContainer>
            ))}
          </div>
          <PaginationButton
            disabled={currentPage === pagesQuantity && true}
            title="Forward button"
            onClick={() => handleCurrentPage('forward')}
          >
            <CaretRight size={32} />
          </PaginationButton>
        </PaginationContainer>
      )}
    </TransactionsContainer>
  )
}
