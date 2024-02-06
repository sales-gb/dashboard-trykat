import styled from 'styled-components'

export const LeftBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 700px) {
    gap: 36px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray7};
  }
`
