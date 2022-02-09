import React, { useRef, useEffect } from 'react'
import { BgOverlay, BackgroundVideo, LogoContainer, AnimatedBGContainer, VideoSection, BackgroundVideoWrapper } from './Video.styled'

export default function Video({ data }) {
  const { video: { localFile: { publicURL } } } = data

  const videoElement = useRef()

  useEffect(() => {
    console.log(videoElement.current.play())
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
          style={{

          }}
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
