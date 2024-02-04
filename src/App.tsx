import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { GlobalStyle } from './styles'

export function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <Helmet titleTemplate="%s | trykat" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
