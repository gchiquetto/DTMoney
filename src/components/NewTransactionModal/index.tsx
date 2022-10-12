import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  CloseModal,
  NewTransactionButton,
  NewTransactionModalContainer,
  Overlay,
  TransactionForm,
  TransactionTypeContainer,
  TransactionTypeGroup,
} from './styles'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  value: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormData = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )
  const newTransactionForm = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      description: '',
      category: '',
      type: 'income',
    },
  })

  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting },
    control,
  } = newTransactionForm

  async function handleSubmitNewTransaction(data: NewTransactionFormData) {
    const { description, value, category, type } = data
    await createTransaction({ description, value, category, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content>
        <NewTransactionModalContainer>
          <CloseModal>
            <X size={24} />
          </CloseModal>
          <Dialog.Title>New Transaction</Dialog.Title>
          <TransactionForm onSubmit={handleSubmit(handleSubmitNewTransaction)}>
            <input
              type="text"
              placeholder="Description"
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Value"
              {...register('value', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Category"
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionTypeGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeContainer variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      <span>Income</span>
                    </TransactionTypeContainer>
                    <TransactionTypeContainer variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      <span>Outcome</span>
                    </TransactionTypeContainer>
                  </TransactionTypeGroup>
                )
              }}
            />

            <NewTransactionButton disabled={isSubmitting}>
              Register
            </NewTransactionButton>
          </TransactionForm>
        </NewTransactionModalContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
