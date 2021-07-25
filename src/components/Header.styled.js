import styled, { css } from 'styled-components'


export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 80px;
  overflow: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  z-index: 1000;

  h2 {
    margin: 0;
  }
  svg {
    height: 50px;
  }
  @media (min-width: 1024px) {
    padding: 0px;

  }


`

export const NavButton = styled.button`
  position: relative;
  display: block;
  height: 16px;
  width: 26px;
  background-color: transparent;
  background-image:${({ theme: { colors } }) => `linear-gradient(to right, ${colors.secondary}, ${colors.secondary})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  padding: 0;
  outline: 0;
  border: 0;
  color: #333;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: .25s cubic-bezier(.17,.67,.89,1.4);
  transition-property: transform;
  will-change: transform;

  ${({ isOpen }) => isOpen && css`
    background-image: none;
  `}

  &::before, &::after {
    content: "";
    position: absolute;
    left: 0; right: 0;
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transition: .25s;
    transition-property: transform, top;
    will-change: transform, top;
    top: unset;

    ${({ isOpen }) => isOpen && css`
      top: 50%;
    `}
  }

  &::before {
    top: 0;
    ${({ isOpen }) => isOpen && css`
      top: 50%;
      transform: translate3d(0,-50%,0) rotate3d(0,0,1,45deg);
    `}
  }

  &::after {
    top: calc(100% - 2px);
    ${({ isOpen }) => isOpen && css`
      top: 50%;
      transform: translate3d(0,-50%,0) rotate3d(0,0,1,-45deg);
    `}
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

export const MenuWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  top: 80px;
  right: ${({ isOpen }) => isOpen ? '-18px' : '-120%'};
  padding-top: 100px;
  transition: 0.4s;
  background-color: white;
  a {
    position: relative;
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-weight: bold;
    &:before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -4px;
      background-color: ${({ theme }) => theme.colors.primaryDark};
      transition: 0.4s;

    }
  }
  @media (min-width: 1024px) {
    position: relative;
    width: 100%;
    height: 80px;
    padding-top: 0px;
    flex-flow: row;
    justify-content: flex-end;
    right: 0;
    top: 0;
    background: white;
    a {
      margin-left: 16px;
      &:before{
        width: 0;
      }
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }

  }
  
`

export const MobileActionBox = styled.div`
  display: flex;
  width: 140px;
  margin: 20px auto 0;
  justify-content: space-between;
  a {
    &:before {
      display: none;
    }
    svg {
      width: 30px;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }

`

export const DesktopActionBox = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    margin-left: 20px;
    a {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
    align-items: center;
    justify-content: center;

    }
  }
`