import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  .confirmButton {
    font-size: 14px;
    text-transform: capitalize;
    align-items: center;
  }

  @media (min-width: 400px) {
    .confirmButton {
      max-width: 70px;
    }
  }

  @media (min-width: 700px) {
    .confirmButton {
      width: 100px;
      max-width: 200px;
    }
  }
`
