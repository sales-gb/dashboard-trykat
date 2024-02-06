import { Helmet } from 'react-helmet-async'

import { Container, Form, TransactionsList } from '../../components'
import { useLayoutStore } from '../../store'
import * as S from './styles'

export function Users() {
  const { isOpen } = useLayoutStore()

  return (
    <Container isOpen={isOpen}>
      <Helmet title="users" />
      <S.LeftBox>
        <h1>Usuários</h1>
        <Form />
      </S.LeftBox>

      <TransactionsList />
    </Container>
  )
}
