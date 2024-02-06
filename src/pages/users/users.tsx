import { Helmet } from 'react-helmet-async'

import { Container, Form, TransactionsList } from '../../components'
import { useLayoutStore } from '../../store'
import * as S from './styles'

export function Users() {
  const { isOpen } = useLayoutStore()

  return (
    <>
      <Helmet title="users" />

      <Container isOpen={isOpen}>
        <S.LeftBox>
          <h1>Usuários</h1>
          <Form />
        </S.LeftBox>

        <TransactionsList />
      </Container>
    </>
  )
}
