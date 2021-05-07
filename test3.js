// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here  
  const res = [];
  point=arr1.sort(function(a, b){return a - b});
  point2=arr2.sort(function(a, b){return a - b});
  console.log(point);
  console.log(point2);
  
  if(point[point.length-1]>point2[0]) res[0]=false;
  if(point[0]>point2[0]) res[1]=true;
  return res;
}

console.log(result(arr1, arr2));