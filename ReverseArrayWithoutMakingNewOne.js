function reverse(arr){
  let length = arr.length - 1;

 for (let i = 0 ; i < length/2; i++){

  let x = arr.length-1 - i;
  let temp = arr[i];
  arr[i] = arr[x];
  arr[x] = temp;

} 

return arr;

}