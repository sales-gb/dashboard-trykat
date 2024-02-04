import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 69px;
  background: ${({ theme }) => theme.colors.gray2};
`

export const NavHeader = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 18px;

  .leftSide {
    display: flex;
    align-items: center;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray7};
  }

  .icon {
    width: 30px;
    height: 30px;
    color: #fff;
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }

    .icon {
      width: 30px;
      height: 30px;
    }
  }
`
