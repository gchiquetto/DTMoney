import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const NewTransactionModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 33rem;
  width: 33.4rem;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`

export const CloseModal = styled(Dialog.Close)`
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme['gray-500']};
  line-height: 0;
  align-self: flex-end;
  cursor: pointer;
`

export const TransactionForm = styled.form`
  flex: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background-color: ${(props) => props.theme['gray-900']};
    line-height: 140%;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:invalid {
      border: 1px solid ${(props) => props.theme['red-500']};
    }
  }
`

export const NewTransactionButton = styled.button`
  border: 0;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
  border-radius: 6px;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-top: auto;
  font-weight: 700;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['green-300']};
    border: 0;
    transition: all 0.2s;
  }
`
export const TransactionTypeGroup = styled(RadioGroup.Root)`
  display: flex;
  justify-content: space-between;
`
interface TransactionTypeProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeContainer = styled(
  RadioGroup.Item,
)<TransactionTypeProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 13.2rem;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &:hover[data-state='unchecked'] {
    background-color: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-700']
        : props.theme['red-500']};
    box-shadow: none;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
