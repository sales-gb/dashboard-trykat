import { MenuRounded, Person } from '@mui/icons-material'
import { Box, Button, createTheme, Modal, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
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

const style = S.modalStyle()

export function Header() {
  const { isOpen, setOpen } = useLayoutStore()
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)

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
            <Button
              variant="text"
              color="primary"
              onClick={toggleNav}
              startIcon={<MenuRounded className="icon" />}
            />

            <h1>Trykat - {pageTitle}</h1>
          </div>

          <Button
            startIcon={<Person className="icon" />}
            onClick={() => setModalOpen(true)}
          />
        </S.NavHeader>

        <Modal
          className="modal"
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <Box sx={{ ...style }}>
            <Button disabled variant="text">
              Nome de usuário
            </Button>
            <Button variant="text">Atualizar os dados</Button>
            <Button variant="text">Alterar senha</Button>
            <Button variant="text">Sair</Button>
          </Box>
        </Modal>
      </S.Header>
    </ThemeProvider>
  )
}
