import { React, useEffect, useState } from "react"

// Hook imports
import useWindowDimensions from "../../hooks/useWindowDimensions"

// Component imports
import SortingMenu from "../SortingMenu/SortingMenu"

// Helper functions
import resetArray from "../../helpers/resetArray"
import getBubbleSortAnimations from "../../helpers/bubbleSort"
import getMergeSortAnimations from "../../helpers/mergeSort"
import getQuickSortAnimations from "../../helpers/quickSort"
import getInsertionSortAnimations from "../../helpers/insertionSort"

const SortingVisualizer = (props) => {
  const [array, setArray] = useState([])
  const [animationSpeed, setAnimationSpeed] = useState(10)
  const [iterationCount, setIterationCount] = useState(0)
  const { height, width } = useWindowDimensions()


  const renderBars = () => {
    const elArray = document.getElementsByClassName('array-bar')
    Array.from(elArray).forEach((el) => {
      el.style.backgroundColor = ''
    })
    setArray(resetArray(5, (height - 20), (width / 20)))
    setIterationCount(0)
  }

  const changeSpeed = (speed) => {
    setAnimationSpeed(speed);
  }

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array)
    const arrayBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < animations.length; i++) {

      if (animations[i].comparison) {
        const [barOneIdx, barTwoIdx] = animations[i].comparison

        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#80ff80'
          barTwoStyle.backgroundColor = '#3B82F6'
        }, i * animationSpeed)

      } else if (animations[i].swap) {
        setTimeout(() => {
          const animation = animations[i].swap
          const [barOneIdx, newHeight] = animation[0]
          const [barTwoIdx, barTwoNewHeight] = animation[1]

          arrayBars[barOneIdx].style.height = `${newHeight}px`
          arrayBars[barTwoIdx].style.height = `${barTwoNewHeight}px`
          arrayBars[barOneIdx].style.backgroundColor = '#80ff80'
          arrayBars[barTwoIdx].style.backgroundColor = '#80ff80'
        }, i * animationSpeed)
      }
    }
    setIterationCount(animations.length)
  }

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array)
    const arrayBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        const color = i % 3 === 0 ? '#3B82F6' : '#80ff80'
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * animationSpeed)
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * animationSpeed)
      }
    }
    setIterationCount(animations.length)
  }

  const quickSort = () => {
    const animations = getQuickSortAnimations(array)
    console.log(animations)
    const arrayBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < animations.length - 1; i++) {

      if (animations[i].comparison) {

        const [barOneIdx, barTwoIdx] = animations[i].comparison

        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#3B82F6'
          barTwoStyle.backgroundColor = '#3B82F6'
        }, i * animationSpeed)

      } else if (animations[i].swap) {
        setTimeout(() => {
          const animation = animations[i].swap
          const [barOneIdx, newHeight] = animation[0]
          const [barTwoIdx, barTwoNewHeight] = animation[1]

          arrayBars[barOneIdx].style.height = `${newHeight}px`
          arrayBars[barTwoIdx].style.height = `${barTwoNewHeight}px`
          arrayBars[barOneIdx].style.backgroundColor = '#7b68ee'
          arrayBars[barTwoIdx].style.backgroundColor = '#7b68ee'
        }, i * animationSpeed)
      } else if (animations[i].pointer) {
        setTimeout(() => {
          const barOneIdx = animations[i].pointer
          arrayBars[barOneIdx].style.backgroundColor = '#80ff80'
        }, i * animationSpeed)
      }
    }
    console.log("finished")
  }

  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array)
    const arrayBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < animations.length; i++) {
      if (animations[i].comparison) {
        const [barOneIdx, barTwoIdx] = animations[i].comparison

        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style

        setTimeout(() => {
          barOneStyle.backgroundColor = '#3B82F6'
          barTwoStyle.backgroundColor = '#3B82F6'
        }, i * animationSpeed)

      } else if (animations[i].swap) {
        setTimeout(() => {
          const animation = animations[i].swap
          const [barOneIdx, newHeight] = animation[0]
          const [barTwoIdx, barTwoNewHeight] = animation[1]

          arrayBars[barOneIdx].style.height = `${newHeight}px`
          arrayBars[barTwoIdx].style.height = `${barTwoNewHeight}px`
          arrayBars[barOneIdx].style.backgroundColor = '#80ff80'
          arrayBars[barTwoIdx].style.backgroundColor = '#80ff80'
        }, i * animationSpeed)
      }
    }

  }

  useEffect(() => {
    renderBars()
  }, [width])

  return (
    <div className="flex">
      <div className="container items-center justify-center drop-shadow-md dark:bg-gray-800 h-full flex-grow">
        {array.map((value, idx) => {
          return <div className="w-2 bg-blue-500 inline-block mr-1 array-bar" key={idx} style={{ height: `${value}px` }}>
          </div>
        })}
      </div>
      <SortingMenu
        randomize={renderBars}
        animationSpeed={changeSpeed}
        iterationCount={iterationCount}
        bubbleSort={bubbleSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
        insertionSort={insertionSort}
      />
    </div>

  )
}

export default SortingVisualizer