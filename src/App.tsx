import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { TransactionsProvider } from './context/TransactionContext'
import { router } from './routes'
import { GlobalStyle } from './styles'

export function App() {
  return (
    <HelmetProvider>
      <TransactionsProvider>
        <GlobalStyle />
        <Helmet titleTemplate="%s | trykat" />
        <RouterProvider router={router} />
      </TransactionsProvider>
    </HelmetProvider>
  )
}
