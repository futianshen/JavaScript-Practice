//練習六：回傳第一個大寫字母以及它的 index
//用 for 迴圈寫寫看
//indexOf
//自然語言轉換成程式語言
//程式語言轉換成自然語言
//只要學會新的語法就回來用基本題練習
//解法正確，但可以考慮看看 胡立 的解法

const position = (str) => {
	let result = ''
	for(let i=0; i<str.length; i++) {
		if('A'<=str[i] && str[i]<='Z') {
			result += str[i]
			result += ' '
			return result += i
		}
	}
	return -1
}

console.log(position("abcd"))
console.log(position("AbcD"))
console.log(position("abCD"))

//0919 將字串翻轉 從最後一個開始做 找到就 break 沒找到回傳 i
/* function position(str) {
	let newStr = string.reverse(str)
	return newStr
} */
//20180917 let,const,for loop practice
/*  解題思路 
依據字母順序判斷是不是不大小寫
一旦找到大寫字母就跳出迴圈
將答案加入 result
回傳

function position(str) {
	let result =''
	for (let i=0; i<str.length-1; i++) {
		if (str[i]>='A' && str[i]<='Z') {
			result = str[i] + ' ' + i
			break
		} else {
			result = -1
		}
	}
	return result
}
*/
/* 解題思路1 （我的方法）ASCII code
1 判斷是不是大寫
2 回傳他的字母
3 回傳他的順位
4 如果i變成4了代表沒有任何一個數字是大寫 回傳-1
每次寫完程式之後將他的邏輯寫下來

// v1 印出
function position(str) {
	var i = 0 
	var result =''
	while (i<str.length) {
		var ASCII =str.charCodeAt(i)
		if (ASCII>=65 && ASCII<=90) {
			break
		} else {
			i++
		} 
	}

	if (i===4) {
		console.log('-1')
		
	} else {
		result += String.fromCharCode(ASCII)
		result += ' '
		result += i
		console.log(result)
	}
}


//v2 回傳
function position(str) {
	var result =''
	var i = 0 
	while (i<str.length) {
		var ASCII =str.charCodeAt(i)
		if (ASCII>=65 && ASCII<=90) {
			break
		} else {
			i++
		} 
	}
	if (i===4) {
		result = -1	
	} else {
		result += String.fromCharCode(ASCII)
		result += ' '
		result += i
	}
	return result
}
*/

/* 解題思路2 複雜解法（待整理）
function position(str) {
	var indexOfLetter =[]
	var from = 'A'.charCodeAt(0)
	var to = 'Z'.charCodeAt(0)
	for (var i= from; i<=to; i++) {
		var char = String.fromCharCode(i)
		indexOfLetter.push({
			char: char,
			index: str.indexOf(char)
		})
	}
	indexOfLetter.sort(function(a,b) { //排序 //sort 看不懂
		if (a.index === b.index) return 0
		return a.index - b.index
	})

	//找不是 -1的數字

	indexOfLetter = indexOfLetter.filter(function(item) {
		 return item.index >= 0
	})

	if (indexOfLetter .length === 0) {
		return -1
	}

	return indexOfLetter[0].char + " " + indexOfLetter[0].index
}
*/

/* 解題思路3 字串比較
從第一個開始跑
找到就印出來
結束這回合

function position(str) {
	for (var i=0 ; i<str.length; i++) {
		if (str[i] >='A' && str[i]<='Z') { //這個比較的字串比較的特性不清楚
			return str[i] + ' ' + i
		}
	}
	return -1
}

*/


