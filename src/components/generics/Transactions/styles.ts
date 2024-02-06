import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;

  @media (min-width: 700px) {
    padding-top: 70px;
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray7};
  }

  .loadingDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
`

export const TransactionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.gray3};
    border-radius: 6px;
    padding: 15px 18px;
    gap: 15px;

    .leftBox {
      display: flex;
      flex-direction: column;
      gap: 5px;

      color: ${({ theme }) => theme.colors.greenLight};
      font-size: 1.125rem;
      font-weight: 600;

      :first-child {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.gray6};
        font-weight: 400;
      }

      @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    .rightBox {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${({ theme }) => theme.colors.gray5};
      font-size: 1rem;

      .buttonsBox {
        display: flex;
        gap: 5px;

        .actionButton {
          width: 71px;
          font-size: 14px;
          text-transform: capitalize;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.gray2};

          @media (min-width: 700px) {
            width: 100px;
          }
        }
      }
    }
  }
`

export const modalStyle = () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: '#29292E',
  boxShadow: 24,

  button: {
    fontSize: '1rem',
    textTransform: 'capitalize',
    fontWeight: '300',
    color: '#fff',
  },

  '@media (min-width: 700px)': {
    width: '200px',
    marginLeft: 'auto',
    marginTop: '60px',
  },
})
