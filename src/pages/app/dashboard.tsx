import { green } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Helmet } from 'react-helmet-async'

import { Container, Form, TransactionsList } from '../../components'
import { useLayoutStore } from '../../store'

const theme = createTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})

export function Dashboard() {
  const { isOpen } = useLayoutStore()

  return (
    <ThemeProvider theme={theme}>
      <Helmet title="dashboard" />

      <Container isOpen={isOpen}>
        <Form />
        <TransactionsList />
      </Container>
    </ThemeProvider>
  )
}
