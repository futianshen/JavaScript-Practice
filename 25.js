/* 20180920
什麼是質數？ 
除了1和自己以外沒有其他因數，只有兩個因數。
什麼是因數？
能夠整除自己的數
什麼是整除？
做除法之後沒有餘數
*/

/* const isPrime = function(n) {
	let factor = 1+n
	let compareFactor = 1
	for (i=2; i<=n; i++) {
		if (n%i===0) compareFactor += i
	}
	return (factor===compareFactor)? true:false
}  */

const isPrime = n => {
	let counter = 0
	for(let i=0; i<=n; i++) {
		if(n%i===0) counter++
	}
	return (counter!==2) ? 'true':'false'
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(37))

/* v1
function isPrime (n) {
	var i = 1
	var arr = []

	while (i<=n) { 
		if (n%i===0) {
			arr.push(i)
		}
		i++
	}
	
	if (arr.length===2) {
		console.log(true)	
	} else {
		console.log(false)
	}

}
*/
//最終解題思路
/* 

將所有 n 的因數放入陣列
看看放入陣列的數字是不是只有兩個
只有兩個的話就是質數
*/

//解題思路1
/* 將 1 和 n 加入陣列 a
將餘數為0的數加入陣列 b
比較兩個陣列是否相同
可能遇到問題：陣列指向是位子 如果我沒有記錯的話

如何將陣列數字加入陣列當中？
if(===)

*/
//解題思路2
/* 找出包含自己在內的所有因數
*/
//卡關的地方？
// push 怎麼使用




