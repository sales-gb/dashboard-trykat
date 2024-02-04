import { CSSObject } from 'styled-components'

import * as S from './styles'

type TProps = {
  sx?: CSSObject
  children: React.ReactNode
  isOpen: boolean
}

export function Container({ sx, isOpen, children }: TProps) {
  return (
    <S.Container sx={sx} isOpen={isOpen}>
      {children}
    </S.Container>
  )
}
