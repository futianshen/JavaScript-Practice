//優惠方案
// 190107
function pa(str) {
  let arr = str.split(' ')
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i]===arr[j]) return "NO"
    }
  }
  return "YES"
}
// 181223
/* function pa(str) {
  let arr = str.split(' ')
  let result = ''
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++)
      if(arr[i]===arr[j]) return result = 'NO'
  }
  return result = 'YES'
} */

console.log(pa('10 10 10'))
console.log(pa('10 10 20'))
console.log(pa('20 10 10'))
console.log(pa('10 20 20'))
console.log(pa('10 30 20'))