import {
  ButtonOpenModal,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
} from './styles'
import igniteLogo from '../../assets/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Header() {
  const openModal = useContextSelector(TransactionsContext, (context) => {
    return context.openModal
  })
  const setModalOpenStatus = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.setModalOpenStatus
    },
  )

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={igniteLogo} alt="" />
          <h1>DT Money</h1>
        </HeaderLogo>
        <Dialog.Root open={openModal} onOpenChange={setModalOpenStatus}>
          <Dialog.Trigger asChild>
            <ButtonOpenModal>New Transaction</ButtonOpenModal>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
