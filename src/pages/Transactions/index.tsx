import { Summary } from '../../components/Summary'
import { CaretLeft, CaretRight, MagnifyingGlass } from 'phosphor-react'
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

export function Transations() {
  return (
    <TransactionsContainer>
      <Summary />
      <FormContainer>
        <input type="text" placeholder="Search for a transaction" />
        <button type="submit">
          <MagnifyingGlass size={20} />
          Search
        </button>
      </FormContainer>
      <TransactionsContent>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PaymentHightlight variant="income">
                  $ 2,000.00
                </PaymentHightlight>
              </td>
              <td>Project</td>
              <td>07/09/2022</td>
            </tr>
            <tr>
              <td width="50%">Zelda Breath of the Wild - Nintendo Switch</td>
              <td>
                <PaymentHightlight variant="outcome">
                  - $ 60.00
                </PaymentHightlight>
              </td>
              <td>Hobby</td>
              <td>20/08/2022</td>
            </tr>
            <tr>
              <td width="50%">Apartment rent payment</td>
              <td>
                <PaymentHightlight variant="income">$ 800.00</PaymentHightlight>
              </td>
              <td>Home</td>
              <td>10/08/2022</td>
            </tr>
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
