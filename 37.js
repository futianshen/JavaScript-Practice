// 190109
function pd(sequence) {
  let arr = sequence.split(' ')
  let max = arr[1]-arr[0]
  let position = 1
  for(let i=1; i<arr.length; i++) {
    if((arr[i+1]-arr[i])>max) {
      max = arr[i+1]-arr[i]
      position = i+1
    }
  }
  return position
}
// 190101
/* function pd(str) {
  let arr = str.split(' ')
  let max = arr[1]-arr[0]
  for(let i=1; i<arr.length-1; i++) {
    if(max<(arr[i+1]-arr[i])) max = arr[i+1]-arr[i]
  }
  for(let i=0; i<arr.length-1; i++) {
    if(max===arr[i+1]-arr[i]) return i+1
  }
} */

console.log(pd('1 3 6 8 9'))