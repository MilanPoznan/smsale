import { useEffect, useRef, useState } from 'react'
import { useCurrentWidth } from './useResize'

/**
 * Function used for animating text
 * 
 * @param {object} element - DOM element or Array of DOM elements (element.current)
 * @param {object} cssProperties - css properties for change
 * @param {boolean} entry - is propery in view
 * @param {number} delay - delaying the animation
 * @param {boolean} isMobileAnimated - checks screen and if true does animation on mobile also
 */
const useAnimateElement = (element, cssProperties, entry, delay = 0, isMobileAnimated = true) => {

  console.log(element)


  const incrementDelay = useRef([])

  const [wasAnimated, setWasAnimated] = useState(false)

  const windowWidth = useCurrentWidth()
  const isElementArray = Array.isArray(element)

  // This func is used for checking screen width if mobile resolution should be animated.
  const checkScreenWidth = () => !isMobileAnimated ? windowWidth > 679 : true

  // In this func are created time intervals(incremented by it's value), and stored in ref array so it can be passed later to timeout.
  const createTimerValues = (ref) => {
    if (isElementArray) {
      for (let i = 0; i < element.length; i++) {
        ref.current[i] = (i + 1) * delay;
      }
    }
    return ref
  }

  // here are applyed all values on element. Takes single element as param.
  const applyAllProperties = (element) => {
    if (checkScreenWidth()) {
      cssProperties.forEach((property) => {
        console.log(element)
        element.style[property[0]] = property[1]
      })
    }
  }


  useEffect(() => {
    createTimerValues(incrementDelay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    let timer = null
    if (entry && !wasAnimated) {
      if (delay && delay > 0) {
        if (isElementArray) {
          element.forEach((item, index) => {
            timer = setTimeout(() => {
              applyAllProperties(item);
            }, incrementDelay.current[index])
          })
        }
        else {
          timer = setTimeout(() => {
            applyAllProperties(element);
          }, delay)
        }
      }
      else {
        applyAllProperties(element)
      }
      setWasAnimated(true)
    }
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, incrementDelay, windowWidth])
}

export default useAnimateElement