//黑澀會妹妹
// 190105 解題思路3
function pa(arr) {
  let distinguish
  let score = 0
  let result
  for(let i=0; i<arr.length; i++) {
    distinguish = cut(arr[i])
    if(distinguish.number<score) {
      result = distinguish.name
      score = distinguish.number
    }
    if(distinguish.number===score) continue
  }
  return result ? result : "Are you kidding me?"
}
function cut(str) {
  let counter = 0
  let name = ''
  let number = ''
  for(let i=0; i<str.length; i++) {
    if(str[i]===' ') {
      if(counter===1) for(let j=0; j<i; j++) name += str[j]
      counter++
    }
    if(counter===2) number += str[i]
  }
  let newArr = {}
  newArr.name = name
  newArr.number = Number(number)
  return newArr
}
// 181219
/* function pa(arr) {
  let min = 100
  let index
  for(let i=0; i<arr.length; i++) {
    let str = arr[i].split(' ')
    if (Number(str[2]) < min) {
      min = Number(str[2])
      index = i
    }
  }
  if (min>=0) return 'Are you kidding me?'
  let str = arr[index].split(' ')
  let result = ''
  for(let i=0; i<2;i++) {
    result += str[i]
    if(1>i) result += ' '
  }
  return result
} */
console.log(pa(['TACO hanon -66', 'peggy Penny 1', 'Debbie MeiMei -66']))
console.log(pa(['TACO hanon 100', 'peggy Penny 100', 'Debbie MeiMei -66']))
console.log(pa(['TACO hanon -99', 'peggy Penny -99', 'Debbie MeiMei -66']))
console.log(pa(['TACO hanon 100', 'peggy Penny 100', 'Debbie MeiMei 66']))
console.log(pa(['TACO hanon 0', 'peggy Penny 74', 'Debbie MeiMei -66']))
console.log(pa(['TACO hanon 0', 'peggy Penny 0', 'Debbie MeiMei 0']))

console.log(1+'2'+'2') //122
//console.log(1++'2'+'2') //error
console.log(1+-'2'+'2'); // -12 === console.log((1-'2')-'2')
console.log('A'+'B'+2); // AB2
console.log('A'-'B'+'2'); //NaN2
console.log(+1+'2'+'2'); // 122


/* 解題思路1
找到最小的分數 記錄是那一組人馬
如果最小的分數大於 0 輸出 Are you kidding ？
如果最小的分數小於 0 輸出 那一組人馬的姓名

-[x]如何取出陣列中的字串？
-[x]如何從字串中取出數字？ 只要知道是第幾個是數字就好
-[x]如何判斷字串中那些部分是數字 ？ 不需要判斷
-[x]取出數字之後如何做比較？
-[x]如何紀錄比較後數字最大的那個陣列的編號？
-[]取得陣列的編號之後，如何去除陣列的中的數字?
*/

/* 解題思路2
取出 arr 內的資料
取出資料的分數
記錄資料的分數
如果資料的分數比上一筆低而且小於0記錄下來
*/
/* 解題思路3
識別模式 名字和數字分開
數字小於 0 記錄分組名字，數字如果都不小於0 輸出 kidding
*/
/* 
如何解題？
識別模式

*/