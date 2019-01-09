// 180109
function pe (strA, strB) {
  if((strA.length+strB.length)>10) {
    if(strA.length!==strB.length) return 'NO'
    let counterA=0, counterB=0
    for(let i=0; i<strA.length; i++) {
      if(strA[i]==='O') counterA++
      if(strB[i]==='O') counterB++
    }
    if(counterA===counterB) return 'NO'
    if(counterA>counterB) return 'A'
    if(counterA<counterB) return 'B'
  }
  else {
    let counterA=0, counterB=0
    for(let i=0; i<strA.length; i++) {
      if(strA[i]==="O") counterA++
      if(strB[i]==="O") counterB++
    }
    if((counterA-counterB)>(5-strB.length)) return "A"
    if((counterB-counterA)>(5-strA.length)) return "B"
    return "NO"
  }
}

/* function pe(str1, str2) {
  arr1 = str1.split('')
  arr2 = str2.split('')
  if ((arr1.length+arr2.length)>10) {
    if((arr1.length+arr2.length)%2) return 'NO'
    let counter1 = 0
    for(let i=0; i<arr1.length; i++) if(arr1[i]==='O') counter1++
    let counter2 = 0
    for(let i=0; i<arr2.length; i++) if(arr2[i]==='O') counter2++
    return (counter1===counter2) ? 'NO' : (counter1>counter2) ? 'A':'B'
  } else {
    let counter1 = 0
    for(let i=0; i<arr1.length; i++) {
      if(arr1[i]==='O') counter1++
    }
    let counter2 = 0
    for(let i=0; i<arr2.length; i++) {
      if(arr2[i]==='O') counter2++
    }
    let minus = counter1-counter2
    if (minus>0) {
      if(5-arr2.length>=minus) return 'NO'
      else return 'A'
    }
    if (minus===0) return 'NO'
    if (minus<0) {
      minus = -minus
      if(5-arr1.length>=minus) return 'NO'
      else return 'B'
    }
  }
}
 */
console.log(pe('OOO', 'XXX'))
console.log(pe('OXOO', 'XXXO'))
console.log(pe('OOO', 'XX'))
console.log(pe('OOOOOO', 'OOOOOX'))
console.log(pe('OOOOOO', 'OOOOOO'))
console.log(pe('OOOOOX', 'OOOOOO'))
console.log(pe('OOOOOXO', 'OOOOOO'))
// 先寫解題思路，覺得可行在開始寫 code

// 維度

// 是否完成5輪 ？
// 是否踢球次數相同 ？
// 踢進的差額是多少 ？

// 差額小於剩餘踢球次數 **

// 已知條件有那些？
// 未知條件有那些？

// 改進 語義化命名
// 邏輯梳理
// 用計算機思維想一遍
