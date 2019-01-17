var MyFunction = require('./43')

describe('convert negetive number in string to negative decimal ', () => {
  test("input str 1 output number 1", () => {
    expect(MyFunction.strToNum(['+3', '+2', '−1','−2'])).toEqual([3, 2, -1, -2])
  })
})

describe('abs sort small to big', () => {
  test("sort", () => {
    expect(MyFunction.sort([3, 2, -1, -2])).toEqual([3, -2, 2, -1])
  })
})

describe('delMax', () => {
  test("delMax1", () => {
    expect(MyFunction.delMax([3, 2, -1, -2], 3)).toEqual([2, -1, -2])
  })
  test("delMax2", () => {
    expect(MyFunction.delMax([3, 3, -1, -2], 3)).toEqual([3, -1, -2])
  })
})

describe('searchAbs', () => {
  test("Positive", () => {
    expect(MyFunction.searchPosAbsMax([3, 2, -1, -2])).toEqual(3)
  })
  test("Nagetive", () => {
    expect(MyFunction.searchNagAbsMax([3, 3, -1, -2])).toEqual(-2)
  })
})

describe('result', () => {
  test("result1", () => {
    expect(MyFunction.result([3 ,2 ,-1 ,-2])).toEqual('NO')
  })
  test("result2", () => {
    expect(MyFunction.result([3, -2, +1, 0, -2])).toEqual('YES')
  })
  test("result3", () => {
    expect(MyFunction.result([3, -2, -1, -1])).toEqual('NO')
  })
})

/* describe('pc', () => {
  test("result1", () => {
    expect(MyFunction.result('+3 +2 −1 −2')).toEqual('YES')
  })
  test("result2", () => {
    expect(MyFunction.result('+3 -2 +1 +0 −2')).toEqual('YES')
  })
}) */

// 寫測試的好處，幫助自己瞭解邊界條件。
// 怎麼在 Jest 使用 ES6語法