import { useState } from 'react'
/**
 * Using to switch between slides in slider on swipe
 * @param {int} activeSlide 
 * @param {array} slider_repeater -> returned from ACF 
 * @param {function} setActiveSlide -> setState function
 */
const useSliderHook = (activeSlide, slider_repeater, setActiveSlide) => {

  const [initialX, setInitialX] = useState(0)
  const [currentX, setCurrentX] = useState(0)


  const nextSlide = () => activeSlide === (slider_repeater.length - 1) ? null : setActiveSlide(activeSlide + 1)
  const previousSlide = () => activeSlide !== 0 ? setActiveSlide(activeSlide - 1) : null

  const onTouchStart = (e) => {
    setInitialX(e.touches[0].clientX)
  }

  const onTouchMove = (e) => {
    if (initialX === null) {
      return;
    }
    setCurrentX(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    let total = initialX - currentX
    if (total > 50) {
      previousSlide()
    } else if (total < -50) {
      nextSlide()
    } else {
      return
    }
  }
  return [nextSlide, previousSlide, onTouchStart, onTouchMove, onTouchEnd]
}

export default useSliderHook;