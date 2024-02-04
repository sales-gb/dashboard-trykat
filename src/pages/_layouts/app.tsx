import { Outlet } from 'react-router-dom'

import { Header, NavBar } from '../../components'
import { useLayoutStore } from '../../store'
import * as S from './styles'

export function AppLayout() {
  const { isOpen } = useLayoutStore()

  return (
    <S.Container>
      <S.Main>
        <Header />
        <S.Content>
          {isOpen ? <NavBar /> : ''}

          <Outlet />
        </S.Content>
      </S.Main>
    </S.Container>
  )
}
