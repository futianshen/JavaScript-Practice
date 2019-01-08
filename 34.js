// 190108
function pf(str) {
  let arr = str.split(' ')
  let arrX = [], arrY = []
  let i = 0
  while(i<arr.length) {
    if(i%2===0) arrX.push(arr[i])
    if(i%2===1) arrY.push(arr[i])
    i++
  }
  let tangent = (arrX[1]-arrX[0])/(arrY[1]-arrY[0]) // 如果不加 （） 會有問題嗎？
  for(let i=1; i<arrX.length; i++) {
    if(tangent===(arrX[(i+1)%3]-arrX[i])/(arrY[(i+1)%3]-arrY[i])) return 'NO' // 理解 + - * / 的優先次序
  }
  return 'YES'
}

// 181224
// 用斜率來判斷
// 將解題細節寫下來
/* function pf(str) {
  arr = str.split(' ')
  let x = [],y = []
  for(let i=0; i<arr.length; i++) {
    if(i%2===0) x.push(arr[i])
    if(i%2===1) y.push(arr[i])
  }
  let tangent = 0
  for(let j=0; j<x.length; j++) {
    let k = j%3
    if(tangent!==(x[k]-x[k+1])/(y[k]-y[k+1])) tangent = (x[k]-x[k+1])/(y[k]-y[k+1])
    else return 'NO'
  }
  return "YES"
}*/

console.log(pf('1 3 2 6 3 9'))
console.log(pf('55 -25 0 0 1 2') )
console.log(pf('1 1 -4 16 4 -8')) 

