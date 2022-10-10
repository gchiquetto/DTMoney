import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;
  padding: 2.5rem 0 7.5rem;

  @media (max-width: 340px) {
    padding: 2.5rem 0 5.5rem;
  }
`

export const HeaderContent = styled.header`
  width: 100%;
  max-width: ${(props) => props.theme['max-width']};
  margin: ${(props) => props.theme['margin-container']};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1120px) {
    padding: 0 1rem;
  }

  @media (max-width: 340px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h1 {
    font-weight: 700;
    font-size: 1.6rem;
  }
`
export const ButtonOpenModal = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.25rem;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
    transition: background-color 0.2s;
  }
`
