//練習五：判斷大小寫
/* 
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。


*/
//ASCII不熟需要翻文件
//return 的 運用
//&& 短路性質運用

console.log(isUpperCase("abcd"))
console.log(isUpperCase("Abcd"))
console.log(isUpperCase("ABCD"))
console.log(isUpperCase("aBCD"))

function isUpperCase(str) {
	if('A'<=str[0] && str[0]<='Z') return true
	else return false
}


/* 解題方式1
1 截取字串中的第一個字
2 判斷是不是大小寫
怎麼判斷？ ASCII
3 判斷 ASCII code 在大寫的範圍內
4 回傳 TRUE or False

//印出
function isUpperCase(str) {
	var ASCII = str.charCodeAt(0)
	if (ASCII>= 65 && ASCII<=90) {
		console.log('true')
	} else {
		console.log('false')
	}
}


// 回傳
console.log(isUpperCase("abcd"))
console.log(isUpperCase("Abcd"))
console.log(isUpperCase("ABCD"))
console.log(isUpperCase("aBCD"))

function isUpperCase(str) {
	var ASCII = str.charCodeAt(0)
	if (ASCII>= 65 && ASCII<=90) {
		return true
	} else {
		return false
	}
}
*/

/* 解題方式2
1 截取字串中第一個字母
2 用字串來判斷他是在哪個區間


console.log(isUpperCase("abcd"))
console.log(isUpperCase("Abcd"))
console.log(isUpperCase("ABCD"))
console.log(isUpperCase("aBCD"))

// 如果沒有字母以外的字
function isUpperCase(str) {
	var char =str[0]
	if (char >= 'a' && char <= 'z') return false //為什麼（）之後不用加{}
	if (char >= 'A' && char <= 'Z') return true //為什麼（）之後不用加{}
}
*/

/* 如果沒有字母以外的字
function isUpperCase(str) {
	var char =str[0]
	if (char >= 'A' && char <= 'Z') return true //為什麼（）之後不用加{}？多行程式碼才要+{}
	return false //為什麽不用加 else？因為上一句如果是對的就會 return 結束
}
*/

/* 和上一題目寫法基本相同
function isUpperCase(str) {
	var char =str[0]
	if (char >= 'a' && char <= 'z') return false
	return true
}
*/

/* function isUpperCase(str) {
	var char =str[0]
	return char >= 'a' && char <= 'z'
}
 */

// 擷取字串的方法有那些 ？
