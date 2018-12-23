//練習十：回傳陣列總和
//最早寫的程式碼放在最下面

const sum = arr => {
	let sum = 0
	for (let i=0; i<arr.length; i++) sum += arr[i]
	return sum
}

console.log(sum([1, 2, 3]))
console.log(sum([-1, 1, 2, -2, 3, -3]))

//20180917 let,for loop
/* function sum(arr) {
	let sum = 0
	for (let i=0; arr[i]; i++) { // arr[i]有數值
		sum += arr[i]
	}
	return sum
} */

/*解題方法
我想去的地方長得怎麼樣？有什麼條件？
我先在擁有哪些條件？我可以用這些條件換到哪些條件？
我利用換到的這些條件可以怎麼幫助我到達我想去的地方

寫程式也是人生。
*/

/* while loop
function sum (arr) {
	i = arr.length-1
	var result = 0
	while (0<=i) {
		result += arr[i]
		i--
	}
	console.log(result)
}

*/