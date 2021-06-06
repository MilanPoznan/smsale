import styled, { css } from 'styled-components'
import { size } from '../global-styles/device'

export const TextComponentSection = styled.section`
  display: flex;
  flex-flow: column;
  margin: 20px auto;
  h1 {
  position: relative;
  margin-bottom: 34px;
  height: fit-content;
  transform: ${({ isInView }) => !isInView ? 'translateY(40px)' : 'translateY(0px)'};
  opacity: ${({ isInView }) => !isInView ? '0' : '1'};
  transition: 0.6s;
  &:before {
    content: '';
    width: 100px;
    height: 8px;
    position: absolute;
    left: 0;
    bottom: -16px;
    background-color: ${({ theme: { colors } }) => colors.primaryDark};
  }
}
p {
    opacity: ${({ isInView }) => !isInView ? '0' : '1'};
    transition: 0.6s;;
  }


@media(min-width: ${size.laptop}) {
  flex-flow: row;
  margin: 60px auto;
  max-width: 1060px;
  h1 {
    margin: 0;
    width: 40%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  div {
    width: 55%;
  }
}
`

