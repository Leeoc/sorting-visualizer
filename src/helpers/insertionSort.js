const getInsertionSortAnimations = (inputArr) => {
  const animations = []
  console.log('sorted', insertionSort(inputArr, animations))
  return animations
}

// FIXME: Fix issue with final bar not sorting 
const insertionSort = (inputArr, animations) => {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    animations.push({ 'comparison': [i, i] })
    // The last element of our sorted subarray
    let j = i - 1;

    while ((j > -1) && (compare(i, j, current, inputArr[j], animations))) {
      animations.push({ 'swap': [[j + 1, inputArr[j]], [j, inputArr[j + 1]]] })
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    animations.push({ 'swap': [[j + 1, current], [i, inputArr[j + 1]]] })
    inputArr[j + 1] = current;
  }
  return inputArr;
}


// TODO: Tidy up this function, those names are nasty
const compare = (i1, i2, v1, v2, animations) => {
  animations.push({ 'comparison': [i1, i2] })
  return (v1 < v2)
}
// compare(inputArr, i, j, animations)
export default getInsertionSortAnimations

// function insertionSort(inputArr) {
//   let n = inputArr.length;
//       for (let i = 1; i < n; i++) {
//           // Choosing the first element in our unsorted subarray
//           let current = inputArr[i];
//           // The last element of our sorted subarray
//           let j = i-1; 
//           while ((j > -1) && (current < inputArr[j])) {
//               inputArr[j+1] = inputArr[j];
//               j--;
//           }
//           inputArr[j+1] = current;
//       }
//   return inputArr;
// }