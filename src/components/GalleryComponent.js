import React, { useState } from 'react'
import leftArrow from '../images/left-arrow.svg'
import rightArrow from '../images/right-arrow.svg'
import Img from 'gatsby-image'

import useSliderHook from '../hooks/useSliderHook';


import SingleSlide from './SingleSlide'

import './slider.scss'

export default function GalleryComponent({ data }) {

  const { galleryImages } = data
  const [activeSlide, setActiveSlide] = useState(0)
  const [nextSlide, previousSlide, onTouchStart, onTouchMove, onTouchEnd] = useSliderHook(activeSlide, galleryImages, setActiveSlide);

  return (
    <div className={'slider case-studies'} id="galerija">
      <div className={`slider__arrow slider__arrow--left ${activeSlide === 0 ? 'slider__arrow--inactive' : null}`}
        onClick={previousSlide}
        onKeyPress={(e) => e.charCode === 32 ? previousSlide : null}
        role="button"
        tabIndex={0}
      >
        <img src={leftArrow} alt="left-arrow" />
      </div>
      <div className={`slider__arrow slider__arrow--right ${activeSlide === (galleryImages.length - 1) ? 'slider__arrow--inactive' : null} `}
        onClick={nextSlide}
        onKeyPress={(e) => e.charCode === 32 ? nextSlide : null}
        role="button"
        tabIndex={0}
      >
        <img src={rightArrow} alt="arrow-right" />
      </div>
      <div className="slider__wrapper" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {galleryImages.map((slide, index) =>
          <SingleSlide
            slideImage={slide}
            key={index}
            type={'slider'}
            activeSlide={activeSlide}
            index={index}
          />
        )}
      </div>
      <div className="slider__dots">
        {galleryImages.map((slider, index) =>
          <span
            key={index}
            className={index === activeSlide
              ? 'slider__single-dot slider__single-dot--active'
              : 'slider__single-dot'
            }
            onClick={() => setActiveSlide(index)}
            onKeyPress={(e) => e.charCode === 32 ? setActiveSlide(index) : null}
            role="button"
            tabIndex={0}
          >
          </span>)}
      </div>
    </div>
  )
}
