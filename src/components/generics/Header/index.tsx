import { Person } from '@mui/icons-material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useLocation } from 'react-router-dom'

import { useLayoutStore } from '../../../store'
import * as S from './styles'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
})

export function Header() {
  const { isOpen, setOpen } = useLayoutStore()
  const location = useLocation()

  const toggleNav = () => {
    setOpen(!isOpen)
  }

  let pageTitle
  switch (location.pathname) {
    case '/':
      pageTitle = 'Dashboard'
      break
    case '/users':
      pageTitle = 'Usuários'
      break
    default:
      pageTitle = ''
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Header>
        <S.NavHeader>
          <div className="leftSide">
            <Button variant="text" color="primary" onClick={toggleNav}>
              <MenuRoundedIcon className="icon" />
            </Button>

            <h1>Trykat - {pageTitle}</h1>
          </div>

          <Button>
            <Person className="icon" />
          </Button>
        </S.NavHeader>
      </S.Header>
    </ThemeProvider>
  )
}
