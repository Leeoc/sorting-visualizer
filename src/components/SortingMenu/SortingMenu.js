import React, { useState } from "react";

import useDarkMode from "../../hooks/useDarkMode";
import "./SortingMenu.css";

const SortingMenu = ({
  randomize,
  animationSpeed,
  bubbleSort,
  mergeSort,
  quickSort,
  insertionSort,
  metaData,
}) => {
  const [sliderValue, setSliderValue] = useState("50");
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="h-50 w-96 p-5 m-5 bg-gray-50 shadow-md dark:bg-gray-800 rounded-lg self-start flex-grow-0">
      <h1 className="text-center dark:text-gray-50">Sorting Menu</h1>
      <div className="items-center justify-center">
        <h2 className="m-2 dark:text-gray-50">Chart Settings</h2>
        <button
          type="button"
          className="font-bold object-center p-2 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white bg-blue-500transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => randomize()}
        >
          Randomize Bars
        </button>
        <label className="flex flex-col p-2 dark:text-gray-50 mt-1">
          Iteration Speed
          <input
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 dark:bg-gray-50 mt-1"
            type="range"
            min="1"
            max="100"
            step="1"
            value={sliderValue}
            onChange={(event) => {
              animationSpeed(event.target.value);
              setSliderValue(event.target.value);
            }}
          />
        </label>
      </div>

      <div className="">
        <h2 className="m-2 dark:text-gray-50">Algorithms</h2>
        <button
          type="button"
          className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => bubbleSort()}
        >
          Bubble Sort
        </button>
        <button
          type="button"
          className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => mergeSort()}
        >
          Merge Sort
        </button>
        <button
          type="button"
          className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => quickSort()}
        >
          Quick Sort
        </button>
        <button
          type="button"
          className="font-bold w-20 p-1 m-2 rounded-lg bg-blue-600 shadow-sm hover:shadow-md text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110"
          onClick={() => insertionSort()}
        >
          Insertion Sort
        </button>
      </div>

      <div className="divide">
        <h2 className="m-2 pt-2 dark:text-gray-50">Algorithm Statistics</h2>
        <p className="ml-4 dark:text-gray-50">
          Time taken:{" "}
          <span className="bold">
            {metaData.time ? `${metaData.time.toFixed(3)}ms` : ""}
          </span>
        </p>
        <p className="ml-4 dark:text-gray-50">
          Iteration Count:
          <span className="bold">{metaData.iterationCount}</span>
        </p>
      </div>

      <div className="pt-1">
        <h2 className="m-2 dark:text-gray-50">Page Settings</h2>
        <label className="flex items-center cursor-pointer m-3">
          <div className="relative">
            <input
              id="darkToggle"
              type="checkbox"
              className="sr-only"
              onClick={() => setTheme(colorTheme)}
              defaultChecked={false}
            />
            <div className="w-10 h-4 bg-gray-400 dark:bg-gray-50 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white dark:bg-blue-600 rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium dark:text-gray-50">
            Too Bright?
          </div>
        </label>
      </div>
    </div>
  );
};

export default SortingMenu;
