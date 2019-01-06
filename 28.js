
console.log(pb('15','456'))
console.log(pb('123','123'))
console.log(pb('555','123'))
console.log(pb('123','456'))
console.log(pb('123555','456'))

// 解題重點
// 浮點數誤差 continue

// 1901 比較兩次語法差別


// 190103
function pb(strM, strN) {
  if(strM.length>strN.length) return 'Unfair'
  if(strM.length<strN.length) return 'Fair'
  if(strM.length===strN.length) {
    for(i=0; i<strM.length; i++) {
      if(strM[i]===strN[i]) continue
      if(strM[i]<strN[i]) return 'Fair'
      else return 'Unfair'
    }
    return 'Unfair'
  }
}

//181221 
function pb(M, N) {
  M = M.split('')
  N = N.split('')
  if (M.length<N.length) return 'Fair'
  else if (M.length>N.length) return 'Unfair' 
  else {
    for (i=0; i<M.length; i++) {
      if(M[i]===N[i]) continue 
      else if(M[i]>N[i]) return 'Unfair'
      else if(M[i]<=N[i]) return 'Fair'
    }
    return 'Fair'
  } 
}


