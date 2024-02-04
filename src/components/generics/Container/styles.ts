import styled, { CSSObject } from 'styled-components'

export const Container = styled.div<{ sx?: CSSObject; isOpen: boolean }>`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 20px 35px;

  background-color: ${({ theme }) => theme.colors.gray1};

  @media (min-width: 700px) {
    padding-left: ${({ isOpen }) => (isOpen ? '50px' : '40x')};
  }

  ${({ sx }) => sx};
`
