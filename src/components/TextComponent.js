import React from 'react'
import { TextComponentSection } from './TextComponent.styled'

export default function TextComponent({ data }) {
  return (
    <TextComponentSection>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.text }} />
    </TextComponentSection>
  )
}
