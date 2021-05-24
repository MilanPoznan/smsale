import React from 'react'
import Img from 'gatsby-image'


export default function FullImage({ data }) {
  const { image: { localFile: { childImageSharp } } } = data
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100vh' }}>
      <Img fluid={childImageSharp.fluid} style={{ maxWidth: '100%', maxHeight: '100vh', objecFit: 'contain' }} />
    </div>
  )
}
