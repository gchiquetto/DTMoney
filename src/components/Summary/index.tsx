import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer, SummaryTitle } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryTitle>
          <p>Income</p>
          <ArrowCircleUp color="#00B37E" />
        </SummaryTitle>
        <strong>$ 15,000.00</strong>
      </SummaryCard>
      <SummaryCard>
        <SummaryTitle>
          <p>Outcome</p>
          <ArrowCircleDown color="#F75A68" />
        </SummaryTitle>
        <strong>$ 3,050.00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <SummaryTitle>
          <p>Total</p>
          <CurrencyDollar color="#FFFFFF" />
        </SummaryTitle>
        <strong>$ 11,950.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
