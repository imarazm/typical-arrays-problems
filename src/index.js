
exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let arrMin = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] < arrMin) {
        arrMin = array[i];
      }
    }
    return min = arrMin;
    // return Math.min.apply(null, array);
  }
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let arrMax = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > arrMax) {
        arrMax = array[i];
      }
    }
    return max = arrMax;
    // return Math.max.apply(null, array);
  }
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let arrSum = 0;
    for (let i = 0; i < array.length; i++) {
      arrSum += array[i];
    }
    return avg = arrSum / array.length;
    // return avg = array.reduce((previous, current) => current += previous) / array.length;
  }
}