// Expected Result : 6
// Direction : Get the total of "1" in bin value of number input
const number = 221;

function result(num) {
  // Your Code Here
  let bin=(num >>> 0).toString(2);
  let count=0;
  for(let x=0;x<bin.length;x++){
    if(bin[x]==1)count++
  }
  return count;
}

console.log(result(number));