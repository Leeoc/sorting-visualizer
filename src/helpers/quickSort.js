let iterationCount = 0

const getQuickSortAnimations = (arr) => {
  const animations = [];
  let array = [...arr];

  if (array.length <= 1) return array;

  const startTime = performance.now();
  quickSort(array, animations);
  const endTime = performance.now();

  const metaData = {
    time: endTime - startTime,
    iterationCount: iterationCount,
  };
  return [animations.slice(0, -1), metaData];
};

const pivot = (arr, animations, start = 0, end = arr.length + 1) => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    iterationCount++
    animations.push({ 'comparison': [i, start] })
    if (arr[i] < pivot) {
      // animations.push({ 'swap': [pivot, i] })
      animations.push({ 'swap': [[start, pivot], [i, arr[i]]] })
      pointer++;
      swap(arr, pointer, i);
    }
  };
  swap(arr, start, pointer);
  animations.push({ 'swap': [[start, arr[start]], [pointer, arr[pointer]]] })

  return pointer;
}

const quickSort = (arr, animations, start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, animations, start, end);
  animations.push({ 'pointer': pivotIndex })
  if (start >= end) return arr;
  quickSort(arr, animations, start, pivotIndex);
  quickSort(arr, animations, pivotIndex + 1, end);

  return arr;
};


export default getQuickSortAnimations