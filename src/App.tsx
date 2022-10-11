import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { Transations } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <Header />
        <Transations />
      </TransactionsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
