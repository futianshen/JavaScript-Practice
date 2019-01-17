//練習八：回傳陣列裡面所有小於 n 的數的總和

console.log(findSmallerTotal([1, 2, 3], 3))
console.log(findSmallerTotal([1, 2, 3], 1))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))

function findSmallerTotal(arr, n) {
	let sum = 0
	for (let i=0; i<arr.length; i++) if(arr[i]<n) sum += arr[i]
	return sum
}

/* 20180917 const,let,for loop practice
thinking:
1.set a result
2.array to number
3.if number < n
4.result += number 
*/
// 比較和三種方式有什麼不同？
/* function findSmallerTotal(arr,n) {
	let sum = 0
	for (let i=0; arr[i]<n; i++) { //數字小於 n
		sum += arr[i]
		if (arr[i]===undefined) break	//這一行刪掉是不是也可以運作
	}
	return sum
}

function findSmallerTotal(arr,n) {
	let sum=0
	for (let i=0; i<=arr.length-1; i++) { //陣列的程度
		if (arr[i]<n) sum += arr[i]
	}
	return sum
}

function findSmallerTotal(arr,n) {
	let sum = 0
	
	for (let i=0; arr[i]; i++) { //如果arr[i]有數值
		if (arr[i]<n) sum += arr[i]
	}
	return sum
}
 */
/*
每次練完題目反復看看程式碼邏輯
推演這個地方做了什麼事情
產生了什麼數字
實際 console.log看看 有什麽不一樣
不看題目先看程式碼，猜猜看題目在問什麼
*/

/* 解題思路
找出陣列中小於 n 的數字總和 


function findSmallerTotal (arr,n) {
	var i =arr.length
	i = i-1
	var result = 0
	while (i>=0) {		
		if (n>arr[i]) {
			result += arr[i]
		}
		i--
	}
	console.log(result)
}
*/