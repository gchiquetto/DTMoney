import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7.125rem;
  margin-bottom: 4rem;

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 1.5rem 2rem 1.5rem 1.5rem;
  border-radius: 6px;
  background-color: ${(props) =>
    props.variant === 'green'
      ? props.theme['green-700']
      : props.theme['gray-600']};

  p {
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 2rem;
    line-height: 140%;
    font-weight: 700;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 778px) {
    strong {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 656px) {
    html {
      font-size: 82.5%;
    }
  }
`

export const SummaryTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`
