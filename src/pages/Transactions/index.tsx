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

const SearchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof SearchFormSchema>

export function Transations() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
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
      <PaginationContainer>
        <PaginationButton disabled title="Back button">
          <CaretLeft size={32} />
        </PaginationButton>
        <div>
          <PageContainer variant="currentPage">1</PageContainer>
          <PageContainer>2</PageContainer>
          <PageContainer>3</PageContainer>
        </div>
        <PaginationButton title="Forward button">
          <CaretRight size={32} />
        </PaginationButton>
      </PaginationContainer>
    </TransactionsContainer>
  )
}
