console.log(pc(['ab', 'cd', 'ef'], [1, 4]))
/* 
將 arr1 中的字串連成一條長字串
將 arr2 的數字取出
在 arr1 上找到對應 arr2數字的字母
將 字母存到 result 中
*/

//180103
function pc(arr1, arr2) {
  let str = ''
  for(let i=0; i<arr1.length; i++) {
    str += arr1[i]
  }
  let arr = str.split('')
  let result = ''
  for(let i=0; i<arr2.length; i++) {
    result += arr[arr2[i]-1]
  }
  return result
}
//181221
function pc(arr1, arr2) {
  let str = ''
  let result = ''
  for (let i=0; i<arr1.length; i++) str += arr1[i]
  for (let j=0; j<arr2.length; j++) {
    let begin = arr2[j]-1
    let last = arr2[j]
    result += str.slice(begin, last)
  }
  return result
}
