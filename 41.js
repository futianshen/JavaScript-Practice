// 190111
function pa(str) {
  let arr = str.split(' ')
  let first = Number(arr[0])
  let final = parseFloat(parseInt(arr[1]))
  let result = 0
  for(let i=first; i<=final; i++) {
    let counter = 0
    for(let j=0; j<=i; j++) if(i%j===0) counter++
    if(counter!==2) result += i
  }
  return result
}

console.log(pa('4 6')) 
console.log(pa('2 6'))
console.log(pa('1 6'))
console.log(pa('4 4'))
console.log(pa('5 5'))
console.log(pa('23 666')) 