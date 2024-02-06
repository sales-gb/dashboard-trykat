import { Helmet } from 'react-helmet-async'

import { Container, Form, SearchForm, TransactionsList } from '../../components'
import { useLayoutStore } from '../../store'
import * as S from './styles'

export function Dashboard() {
  const { isOpen } = useLayoutStore()

  return (
    <Container isOpen={isOpen}>
      <Helmet title="dashboard" />
      <S.LeftBox>
        <h1>Dashboard</h1>
        <Form />
      </S.LeftBox>

      <S.RightBox>
        <SearchForm />
        <TransactionsList />
      </S.RightBox>
    </Container>
  )
}
