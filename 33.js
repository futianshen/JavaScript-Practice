//電費系統

// 190107 那裡有錯 ？
function pc(positions) {
  let price = 0
  let i = 2
  while(i<positions.length) {
    let difference = positions[i]-positions[i-2]
    if(difference>0) price += difference*20
    if(difference<0) price += difference*-10
    i += 2
  }
  return price
}

// 181223
/* function pc(str) {
  let arr = str.split(' ')
  let newArr = []
  for(i=0; i<arr.length-1; i++) {
    let minus = arr[i+1]-arr[i]
    newArr.push(minus)
  }
  let price = 0
  for(j=0; j<newArr.length; j++) {
    if(newArr[j]<0) {
      price += newArr[j]*(-10)
    }
    if(newArr[j]>0) {
      price += newArr[j]*(20)
    }
  }
  return price
} */

console.log(pc('2 8 5'))
console.log(pc('2 9 7 3 4 6 1'))