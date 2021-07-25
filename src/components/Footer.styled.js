import styled, { css } from 'styled-components'

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;


`
export const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  background-color: #000000CC;
  svg {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: white;
    font-family: 'Montserrat';
    font-weight: bold;
    letter-spacing: 1.1px;;
  }
`

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 12px;
  border-top: 1px solid #000;
`
export const SocialShareBox = styled.div`
  display: flex;
  max-width: 200px;
  margin: 10px auto 30px;
  svg {
    transition: 0.4s;
    margin: 0 15px;
    &:hover {
      fill: ${({ theme: { colors } }) => colors.primaryDark};
    }
  }
`