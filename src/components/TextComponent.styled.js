import styled from 'styled-components'
import { size } from '../global-styles/device'

export const TextComponentSection = styled.section`
  display: flex;
  flex-flow: column;
  margin: 20px auto;

  @media (min-width: ${size.laptop}) {
    flex-flow: row;
    margin: 60px auto;
    max-width: 1060px;
    h1 {
      margin: 0;
      width: 40%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    div {
      width: 55%;
    }
  }
`

