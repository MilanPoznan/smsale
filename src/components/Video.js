import React, { useRef, useEffect } from 'react'
import { PlayButton, PlayButtonBorder, HiddenPlayButton, BgOverlay, BackgroundVideo, LogoContainer, AnimatedBGContainer, VideoSection, BackgroundVideoWrapper } from './Video.styled'

export default function Video({ data }) {
  const { video: { localFile: { publicURL } } } = data

  const videoElement = useRef()
  const hiddenButton = useRef()
  useEffect(() => {
    videoElement.current.play();
    // hiddenButton.current.click()
  }, [])
  return (
    <VideoSection>
      <PlayButtonBorder onClick={() => {
        videoElement.current.play()
      }}>
        <PlayButton />
      </PlayButtonBorder>

      <BackgroundVideoWrapper>
        <AnimatedBGContainer />
        <BgOverlay />
        <BackgroundVideo
          autoPlay
          playsinline
          muted
          loop
          type='video/mp4'
          ref={videoElement}
          src={publicURL}
        >
          <source src={publicURL} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </BackgroundVideo>

      </BackgroundVideoWrapper>
      <LogoContainer> SM SALE</LogoContainer>

    </VideoSection >
  )
}
