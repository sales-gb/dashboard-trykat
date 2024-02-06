import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'

import { TransactionsProvider } from './context/TransactionContext'
import { router } from './routes'
import { GlobalStyle } from './styles'

export function App() {
  return (
    <HelmetProvider>
      <TransactionsProvider>
        <GlobalStyle />
        <Toaster
          containerStyle={{
            zIndex: 99999,
          }}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'roboto',
              borderRadius: '30px',
              color: '#58595b',
              background: '#f1f7ff',
              fontWeight: 500,
            },
            error: {
              style: {
                background: '#ff0055',
                color: '#fff',
              },
            },
          }}
        />
        <Helmet titleTemplate="%s | trykat" />
        <RouterProvider router={router} />
      </TransactionsProvider>
    </HelmetProvider>
  )
}
