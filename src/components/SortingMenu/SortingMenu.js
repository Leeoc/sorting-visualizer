import React from "react"

const SortingMenu = ({ randomize, bubbleSort }) => {
  return (
    <div className="h-50 w-96 p-5 m-5 bg-gray-50 shadow-md dark:bg-gray-800 rounded-lg self-start flex-grow-0">
      <h1 className="text-center">Sorting Menu</h1>
      <div className="items-center justify-center">
        <h2 className="m-2">Chart Settings</h2>
        <button type='button' className="object-center p-2 m-2 rounded-lg bg-blue-500 shadow-sm hover:shadow-md text-white bg-blue-500transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => randomize()}>Randomize Bars</button>
      </div>

      <div className="">
        <h2 className="m-2">Algorithms</h2>
        <button type='button' className="w-20 p-1 m-2 rounded-lg bg-blue-500 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" onClick={() => bubbleSort()}>Bubble Sort</button>
        <button type='button' className="w-20 p-1 m-2 rounded-lg bg-blue-500 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110">Merge Sort</button>
      </div>
    </div>
  )
}

export default SortingMenu