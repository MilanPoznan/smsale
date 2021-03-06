import React from "react"
import styled, { keyframes } from "styled-components"
import { size, device } from '../global-styles/device'
const showAnimatedContainer = keyframes`
  0% { width: 0%; }
  100% { width: 100%;  }
`;

const hideAnimatedContainer = keyframes`
0% {width: 100%; left: 0%;}
100% {width: 0%; left: 0%;}
`;

const showElement = keyframes`
  100% {opacity: 1;}
`;


export const BackgroundVideoWrapper = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 30vh;
  height: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 80vh;
    height: 80vh;
  }

`

export const HiddenPlayButton = styled.button`
opacity: 1;

`

export const PlayButtonBorder = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1111;
  border: 2px solid #FFB408;
  opacity: 0;
  animation: ${showElement} 1.8s 2s forwards;
  /* Chrome version 29 and above */
  @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const PlayButton = styled.div`
  width: 0; 
  height: 0; 
  border-style: solid;
  border-width: 0 20px 25px 20px;
  transform: rotate(90deg);
  border-color: transparent transparent #FFB408 transparent;
  left: 4px;
  position: relative;
  z-index: 1111;
 
`
export const VideoSection = styled.section`
  display: block;
  position: relative;
  height: 30vh;
  

  @media (min-width: 1024px) {
    max-height: 80vh;
    height: 80vh;
  }
`


export const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    object-fit: fill;
    object-position: center;
    opacity: 0;
    animation: ${showElement} 0.3s 1.2s forwards;
`;

export const AnimatedBGContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right:  0;
  height: 100%;
  background-color: ${props => props.theme.colors.primary2};
  animation: ${showAnimatedContainer} 1s 0.4s forwards,
  ${hideAnimatedContainer} 1s 2s forwards;
  z-index: 5;

`

export const LogoContainer = styled.div`
  position: absolute;
	top: 50%;
	left: 50%;
  color: white;
  font-size: 64px;
  font-weight: bold;
	transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${showElement} 1.6s 0.5s;
  z-index: 10;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: Arial, Helvetica, sans-serif;
`

export const BgOverlay = styled.div`
 position: absolute;
  top: 0;
  bottom: 0;
  right:  0;
  height: 100%;
  width:100%;
  /* background-color: rgba(211, 211, 211, 0.8); */
  z-index: 1;
  opacity: 0;
  animation: ${showElement} 0.1s 2s forwards;

`

