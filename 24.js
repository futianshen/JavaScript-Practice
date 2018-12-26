console.log(
winner([
    ['O', 'O', 'X'],
    ['O', 'X', 'X'],
    ['O', 'X', 'O']
  ])
)
console.log(
winner([
    ['O', 'O', 'X'],
    ['O', 'X', 'X'],
    ['X', 'X', 'O']
  ])
)
console.log(
winner([
    ['O', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', '']
  ])
)
function winner(arr) {
  // 直3
  let counter
  for(let i=0; i<arr.length; i++) {
    counter = 0
    let win = arr[i][0]
    for(let j=1; j<arr[i].length; j++) {
      if(win===arr[i][j]) counter++
    }
    if(counter===2) return win
  }
  // 橫3
  for(let i=0; i<arr.length; i++) {
    counter = 0
    let win = arr[0][i]
    for(let j=1; j<arr[i].length; j++) {
      if(win===arr[j][i]) counter++
    }
    if(counter===2) return win
  }
  // 斜2
  counter = 0
  for(let i=1; i<arr.length; i++) {
    if(arr[0][0]===arr[i][i]) counter++
    if(counter===2) return arr[i][i]
  }
  counter = 0
  for(let i=1; i<arr.length; i++) {
    if(arr[0][arr.length-1]===arr[arr.length-1-i][i]) counter++
    if(counter===2) return arr[i][arr.length-1-i]
  }
  return 'draw'
}

//20180919 這個版本是錯的
/* function winner(arr) {
  let resultCounterO = 0
  for (let i=0 ; i<arr.length; i++) {
    let innerArr = arr[i]
    let counterO = 0
    for (let j=0; j<innerArr.length; j++) {
        if (innerArr[j]==='') return 'draw'
        counterO += (innerArr[j]==='O')? 1:0    
    }
    resultCounterO += (counterO>1) ? 1:0
}
  return (resultCounterO>1)? 'O': 'X'
} */
// 巢狀迴圈裡面和外面的迴圈會有關聯
/* 解題思路
1 將陣列解開
2 用計數器計數
3 比較計數器數值回傳winner
4 還沒下完或平手回傳 draw
還沒下完字串偵測有沒有三個
計數器數字相同
*/