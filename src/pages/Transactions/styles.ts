import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  margin: ${(props) => props.theme['margin-container']};

  @media (max-width: 1120px) {
    padding: 0 1rem;
  }
`
export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};
    background-color: transparent;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};
      border: 0;
      transition: all 0.2s;
    }
  }

  @media (max-width: 448px) {
    button {
      padding: 0.875rem 1rem;
    }
  }
  @media (max-width: 340px) {
    button {
      padding: 0.875rem;
    }
  }
`

export const TransactionsContent = styled.div`
  margin-top: 1.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`
export const TransactionsTable = styled.table`
  width: 100%;
  min-width: 60.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;
    &:first-child {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`

interface PaymentHighligthProps {
  variant: 'income' | 'outcome'
}

export const PaymentHightlight = styled.span<PaymentHighligthProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PaginationButton = styled.button`
  line-height: 0;
  border: 0;
  color: ${(props) => props.theme['green-500']};
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    color: ${(props) => props.theme['gray-600']};
    cursor: not-allowed;
  }
`
interface PaginationProps {
  variant?: 'currentPage' | 'notCurrentPage'
}

export const PageContainer = styled.span<PaginationProps>`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.variant === 'currentPage'
      ? props.theme['green-700']
      : props.theme['gray-600']};

  color: ${(props) =>
    props.variant === 'currentPage'
      ? props.theme['gray-100']
      : props.theme['gray-300']};
`
