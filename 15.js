table9to9()

function table9to9() {
	for(let i=1; i<=9; i++) {
		let result = ''
		result += i
		result += '*'
		for(let j=1; j<=9; j++) {
			let result1 = result
			result1 += j
			result1 += '='
			result1 += i*j
			console.log(result1)
		}
	}
}

//20180918 好像用for loop 比較容易做
//用回傳做不出來
/* function table9to9(){
	let i = j =1
	while (i<=9) {
		let newStr =''
		newStr += i
		newStr += '*'
		let j = 1
		while (j<=9) {
			let newStr2 = newStr
			newStr2 += j
			newStr2 +='='
			newStr2 += i*j
			console.log(newStr2)
			j++
		}
		i++
	}
} */
/* version1
for (var i = 1; i <= 9; i++) {
	var print = ''
	print += i;
	print += '*';
	for (var j = 1; j <= 9; j++) {
		var result = i*j
		var print2 = print
		print2 += j;
		print2 += '=';
		print2 += result
		console.log(print2)
	}	
}
*/