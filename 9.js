//練習九：回傳陣列裡面所有小於 n 的數

// 怎麼用 filter 解這個題目 ？

let findAllSmall = (arr, n) => {
	let newArr = []
	for (i=0; i<arr.length; i++) if(arr[i]<n) newArr.push(arr[i])
	return newArr
}

console.log(findAllSmall([1,2,3],10) )
console.log(findAllSmall([1,2,3],2) )
console.log(findAllSmall([1,3,5,4,2],4))

/* 20180917 let,const,while loop practice 
thinking
1. set a new array.
2. get old array's value from index0 and compare with n
3. if value < n put into new array
4. return new array
*/
/* 
function findAllSmall(arr,n) {
	let newArr = []
	let i = 0
	while (i<=arr.length-1) {
		if (arr[i]<n) newArr.push(arr[i])
		i++
	}
	return newArr
}

function findAllSmall(arr,n) {
	let newArr = []
	let i = 0
	while (arr[i]<n) { //undefined < n false
		newArr.push(arr[i])
		i++
	}
	return newArr
}
 */
/* while loop
function findAllSmall (arr,n) {
	var newArr = []
	var i = 0
	while (i<arr.length) {
		if (n>arr[i]) {
			newArr.push(arr[i])
		}
		i++
	}
	console.log(newArr)
}
*/

//陣列概念不熟
//怎樣將物件加入陣列？push

/* 從後面做回來
function findAllSmall (arr,n) {
	var newArr = []
	i = arr.length
	i -= 1
	while (i>=0) {
		if (n>arr[i]) {
			newArr.push(arr[i])
		}
		i--
	}
	console.log(newArr)
}
*/

//20180917 看程式碼猜題目 將陣列中小於 n 的數字 加入新陣列