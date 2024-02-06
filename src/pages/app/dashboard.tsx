import { Helmet } from 'react-helmet-async'

import { Container, Form, TransactionsList } from '../../components'
import { useLayoutStore } from '../../store'
import * as S from './styles'

export function Dashboard() {
  const { isOpen } = useLayoutStore()

  return (
    <>
      <Helmet title="dashboard" />

      <Container isOpen={isOpen}>
        <S.LeftBox>
          <h1>Dashboard</h1>
          <Form />
        </S.LeftBox>

        <TransactionsList />
      </Container>
    </>
  )
}
