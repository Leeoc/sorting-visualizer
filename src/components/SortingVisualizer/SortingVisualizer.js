import { React, useEffect, useState } from "react"

// Hook imports
import useWindowDimensions from "../../hooks/useWindowDimensions";

// Component imports
import SortingMenu from "../SortingMenu/SortingMenu";

// Helper functions
import resetArray from "../../helpers/resetArray";
import bubbleSort from "../../helpers/bubbleSort";

const SortingVisualizer = (props) => {
  const [array, setArray] = useState([]);
  const { height, width } = useWindowDimensions();

  const bubbleSortHelper = () => {
    console.log('here')
    const sorted = bubbleSort(array)
    console.log(sorted)
    setArray(bubbleSort(array))
    console.log('done')
  }

  const renderBars = () => {
    setArray(resetArray(5, (height - 20), (width / 20)));
  }

  useEffect(() => {
    renderBars()
  }, [width])

  return (
    <div className="flex">
      <div className="container items-center justify-center drop-shadow-md dark:bg-gray-800 h-full flex-grow">
        {array.map((value, idx) => {
          return <div className="w-2 bg-blue-500 inline-block mr-1" key={idx} style={{ height: `${value}px` }}>
          </div>
        })}
      </div>
      <SortingMenu
        randomize={renderBars}
        bubbleSort={bubbleSortHelper}
      />
    </div>

  )
}

export default SortingVisualizer