import React from 'react'
import styled from 'styled-components'

export const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`


export const SingleService = styled.div`
  display: flex;
  flex-flow: column;
  align-items:center;
  width: 100%;
`

const SingleItemTitle = styled.h5`
    position: relative;
    color: #515151;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
`;

const SingleItemTitleBorder = styled.div`
    display: block;
    background: #beb68b;
    width: 110px;
    height: 1px;
    margin: 7px auto;
    `

const SingleItemTitleText = styled.p`
    margin: 0 auto;
    width: 60%;
    font-size: 14px;
    text-align: center;
    color: #515151;
    line-height: 22px;
`

export default function ServiceComponent({ data }) {
  const { title, servicesRepeater } = data
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap' }}>
      <h3 style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{title}</h3>
      {servicesRepeater.map(item => <SingleService key={item.title}>
        <SingleItemTitle>{item.title}</SingleItemTitle>
        <SingleItemTitleBorder />
        <SingleItemTitleText>{item.text}</SingleItemTitleText>
      </SingleService>)}

    </section>
  )
}
