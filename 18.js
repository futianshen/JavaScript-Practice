console.log(swap('Peter'))
console.log(swap('AbCdE'))

function swap(str) {
	let Str = ''
	for (let i=0; i<str.length; i++) {
		if('a'<=str[i] && str[i]<='z') Str += str[i].toUpperCase()
		if('A'<=str[i] && str[i]<='Z') Str += str[i].toLowerCase()
	}
	return Str
}

// 20180919 這邊的性質是什麼？ 為什麽字串可以比較大小？
/* function swap(str) {
	let newStr =''
 	for (let i=0; i<str.length; i++) {
		newStr += (str[i]>='a' && str[i]<='z') ? 
		str[i].toUpperCase() : str[i].toLowerCase()
	}
	return newStr
} */
/* version1 
function swap(str) {
	var newStr = ''
	var i=0
	while (i<=str.length-1) {
		var ASCII = str.charCodeAt(i)
		if (ASCII<=90 && ASCII>=65) {
			ASCII += 32
		} else if (ASCII<=122 && ASCII>=97) {
			ASCII -= 32
		}
		i++
		newStr += String.fromCharCode(ASCII)
	}
	console.log(newStr)
}
*/

//怎麼轉換？
//ASCII code
//String.fromCharCode(ASCII) 用法需要再確認
//比較week1作業2的寫法有什麽不同
//將所有作業的程式碼留下來
//怎麼找出 ascii code 的大小寫差值