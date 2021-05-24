import React from 'react'
import { BgOverlay, BackgroundVideo, LogoContainer, AnimatedBGContainer, VideoSection, BackgroundVideoWrapper } from './Video.styled'

export default function Video({ data }) {
  const { video: { localFile: { publicURL } } } = data
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
