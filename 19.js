console.log(findMin([1, 2, 5, 6, 99, 4, 5]))
console.log(findMin([1, 6, 0, 33, 44, 88, -10]))


function findMin(arr) {
	let answer
	for(let i=0; i<arr.length; i++) {
		if(i===0) answer = arr[i]
		if(answer>arr[i]) answer = arr[i]
	}
	return answer
}

//20180919
/* function findMin (arr) {
	let min = arr[0]
	for (let i=1; i<arr.length; i++) {
		min = (min<arr[i])? min:arr[i] //簡單條件判斷用 ternary
	}
	return min
} */

/* version 1
function findMin (arr) {
	var i = arr.length-1
	var result=arr[i]
	while (0<=i-1){
		var b=arr[i-1]
		if (result<=b) {
			result = result
		} else {
			result = b
		}
		i--
	}
	console.log(result)
}
*/

//比較運算子 取出最大的

//把自己總結的規律，再一次用在解題中，比如 現在的這狀況是什麼？想達到的狀況他的條件是什麼？我現在要做什麽？