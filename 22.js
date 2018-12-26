console.log(flatten([1, 2, 3]))
console.log(flatten([1, 2, [1, 2], [1, 3], 6]))
console.log(flatten([1, [2, [3, [4]], 5], 6]))

// 這就是遞迴 ？
function flatten(arr) {
  let result = []
  for(let i=0; i<arr.length; i++) {
    if(typeof(arr[i])==='number') result.push(arr[i])
    if(typeof(arr[i])==='object') translate(result, arr[i])
  }
  return result
}

function translate(answer, arr) {
  for(let j=0; j<arr.length; j++) {
    if(typeof(arr[j])==='number') answer.push(arr[j])
    if(typeof(arr[j])==='object') translate(answer, arr[j])
  }
  // 為什麼不用 return 需要再想清楚
}

//20180919 怎麼將陣列變成拆掉？
//如果屬性不等於陣列拆掉
//從裡面開始拆
//點子 解構
/* function flatten(arr) {
    if()
}
*/ 
