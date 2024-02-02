import { createBrowserRouter } from 'react-router-dom'

import { AppLayout, Dashboard, Users } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/users', element: <Users /> },
    ],
  },

  // ,
])
