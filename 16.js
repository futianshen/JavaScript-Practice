/* 
費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....

用比較數學一點的講法，就是：

fib(0) = 0
fib(1) = 1
for n >=2, fib(n) = fib(n-1) + fib(n-2)

現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字
fib(1) 預期回傳值：1
fib(2) 預期回傳值：1
fib(8) 預期回傳值：21

*/
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(8))

function fib(n) {
	let answer
	let zero = 0
	let one = 1
	if (n===0) return answer = zero
	if (n===1) return answer = one
	if (n>1) {
			let a = zero
			let b = one
		for(let i=2; i<=n; i++) {
			answer = a + b
			a = b
			b = answer
		}
		return answer
	}
}

//20180919 花了很多時間
/* function fib(n) {
	let a = 0
	let b = 1
	let c = 1
	if (n===0) return  a
	else if (n===1) return  b
	else {
		for (let i=1; i<n; i++) {
			c = a + b
			a = b
			b = c
		}
		return c
	}
}
 */
/* version 1
function fib(n) {
	var a = 0
	var b = 1
	if (n>0) {
		while (1<n) {
			var c = a+b
			a = b
			b = c
			n--
		}
		console.log(c)
	} else {
		console.log(0)
	}
}
*/