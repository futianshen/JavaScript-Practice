// 190111 我的想法是不是可以用 stack 還有 quere 實作 ?
// 語意化命名
// 使用 .sort() 如何自己寫一個 .sort() ?
function pc(str) {
  // 排序
  let arr = str.split(' ').sort() //primitive type和obj type 的差別
  // 等差
  let difference = arr[1]-arr[0]
  for(let i=arr.length-1; 1<=i; i--) {
    if(difference!==arr[i]-arr[i-1]) return 'No'
  }
  return 'Yes'
}

//190101
function pc(str) {
  let arr = str.split(' ')
  let newArr = []
  let num = arr.length
  for(let j=0; j<num; j++) {
    let min = arr[0]
    for (let i=1; i<arr.length; i++) {
      if(min>arr[i]) min = arr[i]
    }
    let arr2 = []
    let counter = 0
    for(let i=0; i<arr.length; i++) {
      if(counter===0 && min===arr[i]) {
        counter++
        continue
      }
      arr2.push(arr[i])
    }
    arr = arr2
    newArr.push(min)
  }
  let difference = newArr[0]-newArr[1]
  for(let i=1; i<newArr.length-1; i++) {
    if(difference!==(newArr[i]-newArr[i+1])) return 'No'
  }
  return 'Yes'
}

// 有bug
/* function pc(str) {
  let arr = str.split(' ')
  let newArr = []
  let num = arr.length
  for(let j=0; j<num; j++) {
    let min = arr[0]
    for (let i=1; i<arr.length; i++) {
      if(min>arr[i]) min = arr[i]
    }
    newArr.push(min)
    let arr2 = []
    for(let i=0; i<arr.length; i++) {
      if(min!==arr[i]) arr2.push(arr[i])
    }
    arr = arr2
  }
  let difference = newArr[0]-newArr[1]
  for(let i=1; i<newArr.length-1; i++) {
    if(difference!==(newArr[i]-newArr[i+1])) return 'No' // 從右到左運算 ？
  }
  return 'Yes'
}
 */

console.log(pc('1 1 1 1'))
console.log(pc('2 3 1 4'))
console.log(pc('2 3 1 5'))
console.log(pc('3 5 7 4'))

/* 我的想法
複習過去程式碼的時候可以
預測這裏應該是什麼樣子，然後印出來試試看


1. 排序
  1. 找出最小值
  2. 將最小值放入新陣列
  3. 將放入陣列的最小值放入新陣列
2. 比較差是否相同

邊界條件是什麼 ？

關鍵：如何在最小值有2個以上的情況下，只去除一個最小值。

下一步寫測試
*/