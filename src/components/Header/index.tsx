import {
  ButtonOpenModal,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
} from './styles'
import igniteLogo from '../../assets/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={igniteLogo} alt="" />
          <h1>DT Money</h1>
        </HeaderLogo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonOpenModal>New Transaction</ButtonOpenModal>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
