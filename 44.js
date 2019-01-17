//19*9 乘法表，然後輸出的順序 0, m, 1, m-1, 2, m-2…

for(i=1; i<=19; i++) {
  let calc = ''
  calc += i
  calc += '*'
  for (j=1; j<=5; j++) {
    answer = calc
    k= 10-j
    answer += j
    answer += '='
    answer += i * j
    console.log(answer)
    if (j!==k) {
      answer = calc
      answer += k
      answer += '='
      answer += i * k
      console.log(answer)
    }
  }
}