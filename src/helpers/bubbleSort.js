let iterationCount = 0;

const getBubbleSortAnimations = (inputArr) => {
  const animations = [];
  if (inputArr.length <= 1) return inputArr;

  const startTime = performance.now();
  bubbleSort(inputArr, animations);
  const endTime = performance.now();

  const metaData = {
    time: endTime - startTime,
    iterationCount: iterationCount,
  };
  return [animations, metaData];
};

const bubbleSort = (inputArr, animations) => {
  let swapped;
  const arrLength = inputArr.length;
  do {
    swapped = false;
    for (let i = 0; i < arrLength; i++) {
      iterationCount++;
      if (inputArr[i + 1]) {
        animations.push({ comparison: [i, i + 1] });
      } else {
        animations.push({ comparison: [i, i] });
      }

      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
        animations.push({
          swap: [
            [i, inputArr[i]],
            [i + 1, inputArr[i + 1]],
          ],
        });
      }
    }
  } while (swapped);
  return inputArr;
};

export default getBubbleSortAnimations;
