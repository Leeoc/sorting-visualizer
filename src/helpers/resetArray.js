
const resetArray = (min, max, arrSize = 100) => {
  let array = [];
  for (let i = 0; i < arrSize; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return array
}

export default resetArray