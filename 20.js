console.log(findNthMin([1, 2, 3, 4, 5], 1))
console.log(findNthMin([1, 3, 5, 7, 9], 3))
console.log(findNthMin([1, 1, 1, 1, 1], 2))
console.log(findNthMin([2, 2, 2, 3, 2], 2))
console.log(findNthMin([2, 2, 2, 3, 2], 1))

// 如果可以用內建函式 sort 要怎麼使用 ？
function findNthMin(arr, n) {
	let min
	if(n===1) {
		min = arr[0]
		for(let i=0; i<arr.length; i++) {
			if(min>arr[i]) min = arr[i]
		}
	}
	if(n>1) {
		for(let i=1; i<n; i++) {
			min = arr[0]
			for(let j=0; j<arr.length; j++) {
				if(min>arr[j]) min = arr[j]
			}
			let counter = 0
			let newArr = []
			for(let j=0; j<arr.length; j++) {
				if(min===arr[j]) {
					if(counter===0) {
						counter++
						continue
					}
					if(counter===1) newArr.push(min)
				} else {
					newArr.push(arr[j])
				}
			}
			arr = newArr
		}
		min = arr[0]
		for(let j=0; j<arr.length; j++) {
			if(min>arr[j]) min = arr[j]
		}
	}
	return min
}

// 怎麼讓他只找一次 min 其他保留 ？
// 測試陣列中有幾個和 min 相同


// 我認為對的作法
/* function findNthMin(arr, n) {
	let min 
	for(let i=1; i<=n; i++) {
		min = arr[0]
		for(let j=1; j<arr.length; j++) {
			if(min>arr[i]) min = arr[i]
		}	
		arr = arr.filter(num => num > min)
	}
	return min
} */

// 解題思路 將重複的數字只留下一個 將數字從小到大排序

//20190919 還沒解出來 如果題目中有三個數字一樣
//找到n-1個最小的數值刪掉，最後那個陣列中的最小值就是我們要的數值
//先將陣列由小到大排序 刪除最後 N-1 個
/* 
function findNthMin(arr,n) { //n means number
	let newStr =[]
	for(let find=n-1; 0<find; find--) {
		let min = arr[0]
		for (let i=1; i<arr.length; i++) {
			min = (min<arr[i])? min:arr[i] //簡單條件判斷用 ternary
		}
		newStr = arr.remove(min)
	}
	return newStr
}

 */
/*version 2 沒解出來
function findNthMin (arr,n) {
	originalArr = arr
	while (0<n) {
		
		var i=arr.length-1
		var result = arr[i]
		while (0<=i-1) {
			var a = arr[i-1]
			if (result<=a) {
				result = result
			} else {
				result = a
			}
			i--
		}
		var arr = arr.filter(function(x) {
			return x>nresult
		})
		n--
	}
	console.log(arr)
	
}

解題
移除倒數n-1個數	
找到現在最小的數

var newArr = arr.filter(function(x) {
			return x>result
		})


//我想到的題目：將陣列中的數字重新排列順序由大到小或由小到大
//解題思路1：列出所以數字的順序刪掉最小的n-1個

//卡住的地方：怎麼刪除陣列裡的項目
//卡住的地方：用過濾的方式會過濾掉所有數字
*/

/* version 1
function findNthMin (arr,n) {
	originalArr = arr
	while (0<n) {
		var i=arr.length-1
		var result = arr[i]
		while (0<=i-1) {
			var a = arr[i-1]
			if (result<=a) {
				result = result
			} else {
				result = a
			}
			i--
		}
		var arr = arr.filter(function(x) {
			return x>result
		})
		n--
	}
	if (arr[0]) { //如果陣列的第一個有數值，代表陣列被篩選的時候沒有被刪光，沒有值的代表陣列每一個數字都一樣，都被刪光了，所以回傳原來的函式數值。 
		console.log(result)
	} else {
		console.log(originalArr[0])	
	}
}
*/
/*
解題
移除倒數n-1個數	
找到現在最小的數

var newArr = arr.filter(function(x) {
			return x>result
		})
*/

//我想到的題目：將陣列中的數字重新排列順序由大到小或由小到大
//解題思路1：列出所以數字的順序刪掉最小的n-1個

//卡住的地方：怎麼刪除陣列裡的項目
//卡住的地方：用過濾的方式會過濾掉所有數字
/* 
function findNthMin (arr,n) {
	originalArr = arr
	while (0<n) {
		
		var i=arr.length-1
		var result = arr[i]
		while (0<=i-1) {
			var a = arr[i-1]
			if (result<=a) {
				result = result
			} else {
				result = a
			}
			i--
		}
		var arr = arr.filter(function(x) {
			return x>nresult
		})
		n--
	}
	console.log(arr)
	
}

 */

/*
解題
移除倒數n-1個數	
找到現在最小的數

var newArr = arr.filter(function(x) {
			return x>result
		})
*/

//我想到的題目：將陣列中的數字重新排列順序由大到小或由小到大
//解題思路1：列出所以數字的順序刪掉最小的n-1個

//卡住的地方：怎麼刪除陣列裡的項目
//卡住的地方：用過濾的方式會過濾掉所有數字