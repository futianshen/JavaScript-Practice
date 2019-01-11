// 190110
function pa(birthday) {
  let num = birthday
  let result
  while(num.length!==1) {
    result = 0
    for(let i=0; i<num.length; i++) result += Number(num[i])
    num = result.toString()
  }
  return (result===2) ? `${result}, Yes`:`${result}, No`
}
/* function pa(str) {
  let lifenum = str
  if (lifenum.length>1) lifenum = cal(lifenum)
  let result = lifenum
  if(lifenum==='2') return result + ', Yes'
  else return result + ', No'
}

function cal(lifenum) {
  result = 0
  for(i=0; i<lifenum.length; i++) result += Number(lifenum[i])
  lifenum = result.toString()
  if(lifenum.length>1) lifenum = cal(lifenum)
  return lifenum
} */
console.log(pa('19950527'))
console.log(pa('19971205'))
console.log(pa('19960913'))


/* 我想到什麼？
遞歸

遇到錯誤？
與預期不符

*/
