import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { valueFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer, SummaryTitle } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryTitle>
          <p>Income</p>
          <ArrowCircleUp color="#00B37E" />
        </SummaryTitle>
        <strong>{valueFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <SummaryTitle>
          <p>Outcome</p>
          <ArrowCircleDown color="#F75A68" />
        </SummaryTitle>
        <strong>{valueFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <SummaryTitle>
          <p>Total</p>
          <CurrencyDollar color="#FFFFFF" />
        </SummaryTitle>
        <strong>{valueFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
