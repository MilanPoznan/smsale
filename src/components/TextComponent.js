import React, { useState, useEffect, useRef } from 'react'
import { TextComponentSection } from './TextComponent.styled'

import useIntersect from '../hooks/useIntersect'
import useAnimateElement from '../hooks/useAnimateElement'

export default function TextComponent({ data }) {

  const element = useRef(null);
  const [shouldAnimated, setShouldAnimated] = useState(false)

  const properties = [
    ['opacity', 1],
    ['transform', `translate(0px)`]
  ];

  const [ref, entry] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  })

  useAnimateElement(element.current, properties, entry.isIntersecting)


  useEffect(() => {
    !shouldAnimated && entry.isIntersecting && setShouldAnimated(true)
  }, [entry.isIntersecting])

  return (
    <TextComponentSection isInView={shouldAnimated} ref={ref}>
      <h1 className="animated-title">{data.title}</h1>
      <div ref={element} className="animated-text" dangerouslySetInnerHTML={{ __html: data.text }} />
    </TextComponentSection>
  )
}
