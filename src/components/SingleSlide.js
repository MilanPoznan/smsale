import React from 'react'
import Img from 'gatsby-image'

/**
 * SingleSlide component
 * Single slide, used as child component for Slider Component
 * @returns {JSX Element}
 */
export default function SingleSlide({ slideImage, type, index, activeSlide }) {
  const { localFile: { childImageSharp }, altText } = slideImage
  return (
    <div className='single-slide single-slide--slider'
      style={{ left: `${(activeSlide - index) * -100}%` }}
    >
      <div className="single-slide__wrapper">
        <Img fluid={childImageSharp.fluid} />
      </div>
    </div>
  )
}
