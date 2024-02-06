import styled from 'styled-components'

export const ContainerForm = styled.div`
  width: 100%;
  height: 267px;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 20px 18px;
  background: ${({ theme }) => theme.colors.gray3};
  border-radius: 6px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const FormNewCategoryController = styled.form`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;

  .inputField {
    margin-bottom: 10px;
    width: 100%;
    color: #fff;
    font-size: 14px;
    font-weight: 400;

    label {
      color: #fff;
    }
  }

  .doubleInput {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .confirmButton {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.gray3};
  }

  .confirmButton:hover {
    color: ${({ theme }) => theme.colors.gray7};
  }
`
