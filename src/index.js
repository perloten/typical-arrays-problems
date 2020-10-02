
exports.min = function min (array) {
    if ( array === undefined || array.length == 0) {
      return 0;} else {
        let minValue = array[0];
        for(let i=0; i<array.length; i++){
          if (minValue > array[i]) minValue = array[i];
       }
     return minValue;
     //return Math.min(...array);
      }
    }
    
  
   

exports.max = function max (array) {
  if ( array === undefined || array.length == 0) {
  return 0;} else {
    let maxValue = array[0];
        for(let i=0; i<array.length; i++){
          if (maxValue < array[i]) maxValue = array[i];
       }
     return maxValue;
    //return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if ( array === undefined || array.length == 0 ){
    return 0;
  } else {
    return array.reduce( (sum, current) => ( sum + current ) ) / array.length;
  }
}

