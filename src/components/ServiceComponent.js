import React, { useRef } from 'react'
import styled from 'styled-components'
import { device } from '../global-styles/device'
import useIntersect from '../hooks/useIntersect'
import useAnimateElement from '../hooks/useAnimateElement'
import { useCurrentWidth } from '../hooks/useResize'


const SingleServicesWrapp = styled.div`
  display: flex;
  flex-flow: column;
  margin: 40px auto 80px;
  @media ${device.tablet} {
    flex-flow: row;
  }
`

const SingleService = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`

const SingleItemTitle = styled.h5`
    position: relative;
    color: #515151;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    margin: 20px auto 12px;
`;

const SingleItemTitleBorder = styled.div`
    display: block;
    background: #FFB408;
    width: 110px;
    height: 1px;
    margin: 4px auto 14px;
`

const SingleItemTitleText = styled.p`
    margin: 0 auto;
    max-width: 60%;
    font-size: 12px;
    text-align: center;
    color: #515151;
    line-height: 22px;
`


export default function ServiceComponent({ data }) {

  const { title, servicesRepeater } = data
  const titleRef = useRef()
  const textRef = useRef()
  const elementArray = useRef([])


  const properties = [
    ['opacity', 1],
    ['transform', `translate(0px)`]
  ];

  const [ref, entry] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  })

  // useAnimateElement(elementArray.current, properties, headlinesEntry.isIntersecting);
  // useAnimateElement(elementArray, properties, entry.isIntersecting)


  return (
    <section style={{ display: 'flex', flexWrap: 'wrap' }} ref={ref} id="usluge">
      <h3 style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{title}</h3>

      <SingleServicesWrapp >

        {servicesRepeater.map((item, index) => <SingleService isInView={entry.isIntersecting} key={item.title} ref={(element) => elementArray.current[index] = element} >
          <SingleItemTitle ref={titleRef}>{item.title}</SingleItemTitle>
          <SingleItemTitleBorder />
          <SingleItemTitleText ref={textRef}>{item.text}</SingleItemTitleText>
        </SingleService>)}

      </SingleServicesWrapp>

    </section>
  )
}
