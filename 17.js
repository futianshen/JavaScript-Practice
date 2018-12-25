// 自己寫一個可以使用的 reverse 函式怎麼寫？
// 內建 reverse 函數怎麼用 ？


console.log(reverse('abcd'))
console.log(reverse('12345aa'))

function reverse(str){
	let arr = str.split('')
	str = ''
	for(i=arr.length-1; 0<=i; i--) {
		str += arr[i]
	}
	return str
}



/* function reverse (str) {
	let result = ''
	for (let i=str.length-1; 0<=i; i--) {
		result += str[i]
	}
	return result
} */

/* version1
function reverse (str) {
	var i=str.length-1
	var result = ''
	while (0<=i) {
		result +=str[i]
		i--
	}
	console.log(result)
}
*/