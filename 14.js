table(1) 
console.log()
table(7)

function table(n) {
	for(i=1; i<=9; i++) {
		let result = n
		result += '*'
		result += i
		result += ' = '
		result += n*i
		console.log(result)
	}
}

// 20180918
/* function table(n) {
	let counter = 1
	while (counter<=9) {
		let result =n
		result += '*'
		result += counter
		result += '='
		result += n*counter
		counter ++
		console.log(result)
	}
} */
/*
function table(n) {
	
	for (var i = 1; i <= 9; i++) {
		var print =''
		var result = n*i
		print += n
		print += '*'
		print += i
		print += '='
		print += result
		console.log(print)
	}
}
*/

//變數的使用範圍在哪裏？
//每次迴圈結果重新歸零 lv2ex3.js
//能不能用 while 迴圈寫一次？