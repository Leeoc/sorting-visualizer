import PreviousMap from "postcss/lib/previous-map";
import React, { useState } from "react"

const SortingMenu = ({ randomize, animationSpeed, bubbleSort, mergeSort, quickSort, iterationCount }) => {
  const [sliderValue, setSliderValue] = useState('50')
  return (
    <div className="h-50 w-96 p-5 m-5 bg-gray-50 shadow-md dark:bg-gray-800 rounded-lg self-start flex-grow-0">
      <h1 className="text-center">Sorting Menu</h1>
      <div className="items-center justify-center">
        <h2 className="m-2">Chart Settings</h2>
        <button type='button' className="font-bold object-center p-2 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white bg-blue-500transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => randomize()}>Randomize Bars</button>
        <label className="flex flex-col p-2">
          Iteration Speed
          <input className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128" type="range" min="1" max="100" step="1" value={sliderValue} onChange={(event) => { animationSpeed(event.target.value); setSliderValue(event.target.value) }} />
        </label>

      </div>

      <div className="">
        <h2 className="m-2">Algorithms</h2>
        <button type='button' className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => bubbleSort()}>Bubble Sort</button>
        <button type='button' className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => mergeSort()}>Merge Sort</button>
        <button type='button' className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => quickSort()}>Quick Sort</button>
      </div>

      <div className="divide">
        <h2 className="m-2 pt-2">Algorithm Statistics</h2>
        <p className="ml-4">Iteration Count: <span className="bold">{iterationCount}</span></p>
      </div>
    </div >
  )

}

export default SortingMenu