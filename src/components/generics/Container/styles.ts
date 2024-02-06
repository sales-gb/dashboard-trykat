import styled, { CSSObject } from 'styled-components'

export const Container = styled.div<{ sx?: CSSObject; isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 20px 35px;

  background-color: ${({ theme }) => theme.colors.gray1};

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: start;
    gap: 70px;
    padding-left: ${({ isOpen }) => (isOpen ? '50px' : '40x')};
  }

  ${({ sx }) => sx};
`
