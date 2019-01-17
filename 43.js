//module.exports = strToNum 
//原來想說用轉成絕對值再來排序但這樣會有問題 可以用 filter 依據每次的數字改變條件
//這裡要做的邏輯 第一個數字要是大寫，數列以正負相間的邏輯排序
//容許值中最大的，每次判斷下一次計算那些適合，那個最適合 ？
module.exports = {
  pc: function(str) {
    let arr = str.split(' ')
    arr = strToNum(arr)
    arr = sort(arr)
    return result(arr)
  },
  strToNum: function(arr) {
    let newArr = []
    let num = 0
    for(let i=0; i<arr.length; i++) {
      if(Number(arr[i])>=0) num = Number(arr[i])
      else num = -(Number(arr[i][1]))
      newArr.push(num)
    }
    return newArr
  },
  sort: function(arr) {
    let newArr = []
    arr = arr.filter(item=>item!==0)
    let max = 0
    let handoff = true
    while(arr.length!==0) {
      if(handoff) max = searchPosAbsMax(arr) //函式中的函式怎麼用 Jest 做測試？ 如果不用 Jest 要怎麼做測試？ 用 console.log 先把邊界條件寫下來
      else max = searchNagAbsMax(arr) //函式中的函式怎麼用 Jest 做測試？
      newArr.push(max)
      arr = delMax(arr, max)
      handoff = !handoff
    }
    return newArr
  },
  searchPosAbsMax: function(arr) {
    arr = arr.filter(item=>item>0)
    let max = 0
    for(let i=0; i<arr.length; i++) { 
      if(max<arr[i]) max=arr[i]
    }
    return max
  },
  searchNagAbsMax: function(arr) {
    arr = arr.filter(item=>item<0)
    let max = 0
    for(let i=0; i<arr.length; i++) { 
      if(max<Math.abs(arr[i])) max=arr[i]
    }
    return max
  },
  delMax: function(arr, max) {
    let newArr = []
    let counter = 0
    for(let i=0; i<arr.length; i++) {
      if(counter===0 && arr[i]===max) {
        counter++
        continue
      }
      newArr.push(arr[i])
    }
    return newArr
  },
  result: function(arr) {
    let sum = 0
    for(let i=0; i<arr.length; i++) {
      sum += arr[i]
      if(sum<0 || sum>3) return 'NO'
    }
    return 'YES'
  }
}

//改善寫法 排序的時候依據現在是正數還是負數來選擇接下來要+的數字
function pc(str) {
  let arr = str.split(' ')
  arr = strToNum(arr)
  arr = sort(arr)
  return result(arr)
}
function strToNum(arr) {
  let newArr = []
  let num = 0
  for(let i=0; i<arr.length; i++) {
    if(Number(arr[i])>=0) num = Number(arr[i])
    else num = -(Number(arr[i][1]))
    newArr.push(num)
  }
  return newArr
}
function sort(arr) {
  let newArr = []
  arr = arr.filter(item=>item!==0)
  let max = 0
  let handoff = true
  while(arr.length!==0) {
    /*  根據現在的 sum 選擇 arr 中的數字
    if(handoff) max = searchPosAbsMax(arr)
    else max = searchNagAbsMax(arr)
    newArr.push(max)
    arr = delMax(arr, max)
    handoff = !handoff */
  }
  return newArr
}
function searchPosAbsMax(arr) {
  arr = arr.filter(item=>item>0)
  let max = 0
  for(let i=0; i<arr.length; i++) { 
    if(max<arr[i]) max=arr[i]
  }
  return max
}
function searchNagAbsMax(arr) {
  arr = arr.filter(item=>item<0)
  let max = 0
  for(let i=0; i<arr.length; i++) { 
    if(max<Math.abs(arr[i])) max=arr[i]
  }
  return max
}
function delMax(arr, max) {
  let newArr = []
  let counter = 0
  for(let i=0; i<arr.length; i++) {
    if(counter===0 && arr[i]===max) {
      counter++
      continue
    }
    newArr.push(arr[i])
  }
  return newArr
}
function result(arr) {
  let sum = 0
  for(let i=0; i<arr.length; i++) {
    sum += arr[i]
    if(sum<0 || sum>3) return 'NO'
  }
  return 'YES'
}
console.log(pc('+3 +2 +1 -2 -2'))
console.log(pc('+3 +2 −1 −2'))
console.log(pc('+3 −2 +1 +0 −2'))
/* string 轉 number 大全只有正數會轉負數不會轉
console.log(arr[i])
console.log(Math.abs(arr[i]))
console.log(parseInt(arr[i]))
console.log(typeof arr[i])

console.log(typeof str)
console.log(parseInt(arr[i], 10))
console.log(parseFloat(arr[i]))
console.log(Number(arr[i]))

*/

/* 
如何將一個負數型別為字串，轉變成負數型別為數字？
如何取絕對值 Math.abs()

*/

/* 



*/