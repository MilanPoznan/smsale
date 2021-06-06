import React, { useState, useEffect, useRef } from 'react'
import { TextComponentSection } from './TextComponent.styled'
import useIntersect from '../hooks/useIntersect'
export default function TextComponent({ data }) {

  const [isInView, setIsInView] = useState(true)

  const [textComponentElement, headlinesEntry] = useIntersect({
    rootMargin: '0px 0px 0px',
    threshold: 0.8
  })

  useEffect(() => {
    // headlinesEntry.isIntersecting && setIsInView(true)
    // console.log(1)
  })

  return (
    <TextComponentSection ref={textComponentElement} isInView={isInView}>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.text }} />
    </TextComponentSection>
  )
}
