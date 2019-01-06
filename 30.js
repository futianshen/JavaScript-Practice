// 190106
function pe(num) {
  let numFriend = 0
  for(let i=1; i<num; i++) {
    if(num%i===0) numFriend += i
  }
  if (num===numFriend) return `=${num}`
  let friendFriend = 0
  for(let i=0; i<numFriend; i++) {
    if(numFriend%i===0) friendFriend += i
  }
  if (num===friendFriend) return `${numFriend}`
  else return '0'
}

// 181221
/* function pe(n) {
  let sumA = 0
  for(let i=1; i<n; i++) {
    if(n%i===0) sumA += i
  }
  let m = sumA
  let sumB = 0
  for(let j=1; j<m; j++) {
    if(m%j===0) sumB += j
  }
  if (n === m) {
    let str = '='
    str += n
    return str
  }
  if (n === sumB) return m.toString()
  else return '0'
} */

console.log(pe(6))
console.log(pe(7))
console.log(pe(220))
console.log(pe(284))
console.log(pe(17296))
console.log(pe(18416))