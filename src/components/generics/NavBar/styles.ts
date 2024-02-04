import styled from 'styled-components'
type TNavBarWrapperProps = {
  isOpen: boolean
}

export const NavBarWrapper = styled.div<TNavBarWrapperProps>`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gray3};
  overflow: auto;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
  }

  .icon {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.gray7};
  }

  .navButton {
    width: 100%;
    display: flex;

    gap: 2px;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 700px) {
    width: 120px;
    height: auto;
    display: block;

    .icon {
      width: 25px;
      height: 25px;
    }

    .navButton {
      flex-direction: column;
      font-size: 1.125rem;
    }

    .close-btn {
      display: none;
    }
  }
`
