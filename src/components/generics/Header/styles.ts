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

export const modalStyle = () => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  button: {
    fontSize: '1rem',
    textTransform: 'capitalize',
    fontWeight: '300',
    color: '#fff',
  },
})
