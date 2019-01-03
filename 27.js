console.log(pd([1, 3, 5])) //1
console.log(pd([1,1.1,1.2,10, 3, 5])) //4
/* 
算出平均值
算出低於平均值的個數
*/
//1901 能用 const 用 const


//190103
function pd(arr) {
  let i = 0
  let sum = 0
  while(i<arr.length) {
    sum += arr[i]
    i++
  }
  let avg = sum/arr.length
  i = 0
  let counter = 0
  while(i<=arr.length) {
    if(arr[i]<avg) counter++
    i++
  }
  return counter
}
//181221
/* function pd(arr) {
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  let avg = sum/arr.length
  let counter = 0
  for(let i=0; i<arr.length; i++) {
    if(arr[i]<avg) counter++
  }
  return counter
}
 */
