//沙之國

// 190108
function pd(capacity) {
  let container = 27
  let count = 0
  while(capacity!==0) {
    count += (capacity-(capacity%container))/container // 有沒有內建函式可以無條件捨去
    capacity = capacity%container
    container /= 3
  }
  return count
}

/* function pd(num) {
  let container = 27
  let counter = 0
  for(let i=0; i<=3; i++) {
    if(num >= container) counter += (num-(num%container))/container
    num = num%container
    container /= 3
  }
  return (counter)
} */

console.log(pd(1))
console.log(pd(29))
console.log(pd(100))

// 漏斗