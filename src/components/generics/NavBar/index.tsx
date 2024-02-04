import { Close, Person, SignalCellularAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { useLayoutStore } from '../../../store'
import * as S from './styles'

export function NavBar() {
  const { isOpen, setOpen } = useLayoutStore()

  const handleClose = () => {
    setOpen(!isOpen)
  }

  return (
    <S.NavBarWrapper isOpen={isOpen}>
      <Button className="close-btn" variant="text" onClick={handleClose}>
        <Close className="icon" />
      </Button>

      <NavLink className="navLink" to="/">
        <Button
          variant="text"
          onClick={handleClose}
          startIcon={<SignalCellularAlt className="icon" />}
          className="navButton"
        >
          Dashboard
        </Button>
      </NavLink>

      <NavLink className="navLink" to="/users">
        <Button
          variant="text"
          onClick={handleClose}
          startIcon={<Person className="icon" />}
          className="navButton"
        >
          Usuários
        </Button>
      </NavLink>
    </S.NavBarWrapper>
  )
}
