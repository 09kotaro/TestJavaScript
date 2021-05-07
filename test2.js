// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arr3=arr1;
var arr4=arr2;

var txt="";
var tmp="";
function result(arr1, arr2) {
  // Your Code Here
  for(let j=0;j<arr2.length;j++){
    for(let i=0;i<arr1.length;i++){
      if(arr2[j]==arr1[i])  delete arr4[j];
    }
     txt += arr4[j] + ",";
  }
  console.log(txt);

  for (let x=0;x<arr4.length;x++) {
      if(arr4[x]==undefined) ;
      if((arr4[x]%2)==0) arr3.splice(arr3.length,0,arr4[x]);
      if((arr4[x]%2)==1) arr3.splice(0,0,arr4[x]);
  }
  for (y in arr3) {
    tmp += arr3[y] + ",";
  }
  return tmp;
}

console.log(result(arr1, arr2));
