//練習七：回傳陣列裡面所有小於 n 的數的數量

console.log(findSmallCount([1, 2, 3], 2) )
console.log(findSmallCount([1, 2, 3, 4, 5], 0) )
console.log(findSmallCount([1, 2, 3, 4], 100))

function findSmallCount(arr, n) {
	let counter = 0
	for (let i=0; i<arr.length; i++) if (arr[i]<n) counter++
	return counter
}

//for loop,const,let practice function
/* thinking
將陣列中的數字取出來
和 n 比較
如果小於 n 就計數一次
回傳計數
*/

/* function findSmallCount (arr, n) { //怎麼使用箭頭函式？
	let counter =0
	for (let i=0; i<=arr.length-1; i++) {
		if (arr[i]<n) counter++
	}
	return counter
}; */

/* while loop
function findSmallCount(arr,n) {
	var i = arr.length
	var counter = 0
	while (i>=0) { // 從後面做回來
		if (arr[i]<n) {
			counter++
		} 
		i--
	}
	return counter
}
*/