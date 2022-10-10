import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseModal,
  NewTransactionButton,
  NewTransactionModalContainer,
  Overlay,
  TransactionForm,
  TransactionTypeContainer,
  TransactionTypeGroup,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content>
        <NewTransactionModalContainer>
          <CloseModal>
            <X size={24} />
          </CloseModal>
          <Dialog.Title>New Transaction</Dialog.Title>
          <TransactionForm>
            <input type="text" placeholder="Description" />
            <input type="number" placeholder="Value" />
            <input type="text" placeholder="Category" />
            <TransactionTypeGroup>
              <TransactionTypeContainer variant="income" value="Income">
                <ArrowCircleUp size={24} />
                <span>Income</span>
              </TransactionTypeContainer>
              <TransactionTypeContainer variant="outcome" value="Outcome">
                <ArrowCircleDown size={24} />
                <span>Outcome</span>
              </TransactionTypeContainer>
            </TransactionTypeGroup>
            <NewTransactionButton>Register</NewTransactionButton>
          </TransactionForm>
        </NewTransactionModalContainer>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
