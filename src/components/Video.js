import React, { useRef, useEffect } from 'react'
import { HiddenPlayButton, BgOverlay, BackgroundVideo, LogoContainer, AnimatedBGContainer, VideoSection, BackgroundVideoWrapper } from './Video.styled'

export default function Video({ data }) {
  const { video: { localFile: { publicURL } } } = data

  const videoElement = useRef()
  const hiddenButton = useRef()
  useEffect(() => {
    console.log(videoElement.current)
    videoElement.current.play();
    // hiddenButton.click()
  }, [])
  return (
    <VideoSection>
      <BackgroundVideoWrapper>
        <AnimatedBGContainer />
        <BgOverlay />
        <BackgroundVideo
          autoPlay
          muted
          loop
          ref={videoElement}
          src={publicURL}
        >
          <source src={publicURL} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </BackgroundVideo>
        <HiddenPlayButton ref={hiddenButton} onClick={() => videoElement.current.play()}></HiddenPlayButton>

      </BackgroundVideoWrapper>
      <LogoContainer> SM SALE</LogoContainer>
    </VideoSection >
  )
}
