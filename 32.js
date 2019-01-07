//首領的名字
// 190107
function pb(dirtyName, testName) {
  let clueFront = ""
  let clueBack = ""
  for(let i=0; i<dirtyName.length; i++) {
    if(dirtyName[i]==="#") {
      for(let j=0; j<i; j++) clueFront += dirtyName[j] 
      for(let j=i+1; j<dirtyName.length; j++) clueBack += dirtyName[j]
    }
  }
  let output = []
  for(let i=0; i<testName.length; i++) {
    let result = "POSSIBLE"
    if(clueFront) {
      for(let j=0; j<clueFront.length; j++) {
        if(clueFront[j]!==testName[i][j]) {
          result = "IMPOSSIBLE"
          break
        }
      }
    }
    if(clueBack) {
      for(let j=0; j<clueBack.length; j++) {
        if(clueBack[j]!==testName[i][testName[i].length-clueBack.length+j]) {
          result = "IMPOSSIBLE"
          break
        }
      }
    }
    output.push(result)
  }
  return output
}
// 181224
/* function pb(str, arr) {
  let clue
  let newArr = []
  if (str[str.length-1]==='#') {
    clue = str.split('#')[0]
    for(i=0; i<arr.length; i++) {
      let counter = 0
      for(j=0; j<clue.length; j++) {
        if(arr[i][j]===clue[j]) counter++
      }
      if(counter===clue.length) newArr.push('POSSIBLE')
      else newArr.push('IMPOSSIBLE')
    }
  } else if(str[0]==='#') {
    clue = str.split('#')[0]
    for(i=0; i<arr.length; i++) {
      let counter = 0
      for(j=clue.length-1; 0<=j; j--) { // 這個判斷和 第 33 行相比有沒有問題 ？
        if(arr[i][j]===clue[j]) counter++
      }
      if(counter===clue.length) newArr.push('POSSIBLE')
      else newArr.push('IMPOSSIBLE')
    }
  } else {
    clue = str.split('#')
    for(i=0; i<arr.length; i++) {
      let counter1 = 0
      for(j=0; j<clue[0].length; j++) {
        if(arr[i][j]===clue[0][j]) counter1++
      }
      let counter2 = 0
      for(j=0; j<clue[1].length; j++) {
        if(arr[i][arr[i].length-1-j]===clue[1][clue[1].length-1-j]) counter2++
      }
      if(counter1===clue[0].length && counter2===clue[1].length) newArr.push('POSSIBLE')
      else newArr.push('IMPOSSIBLE')
    }
  }
  return newArr
}
 */
console.log(pb('jam#s', ['john', 'james', 'jam', 'jambus']))
console.log(pb('sa#', ['sally', 'sa', 'susan']) )

// 可以切成兩段解題 比如 sa#ra   sa#  #ra
// 判斷切出來的是後面還是前面 如果是前面 如果是後面

// 判斷連續的方法可以再修改