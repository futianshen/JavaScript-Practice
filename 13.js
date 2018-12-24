stars2(1)
stars2(3)
stars2(5)


// 先拆成兩層再來想怎麼處理
function stars2(n) {
	let star = ''
	for(let i=1; i<=n; i++) {
		star += '*'
		console.log(star)
	}
	for(let j=1; j<=n; j++) {
		let star2 = ''
		for(let i=n-j; 1<=i; i--) {
			star2 += '*'
		}
		console.log(star2)
	}
}

//20180918 巢狀迴圈裡面迴圈和外面迴圈有關係？
//正金字塔
//倒金字塔 樓層
//// 高度
/* function stars2(n) {
	let star = ''
	for (let i=1; i<=n; i++) {
		let result1 = ''
		star +='*'
		result1 +=star
		console.log(result1)
	}
	for (let i=n-1; 0<i; i--) { //
		star =''
		for (let j=i; 1<=j; j--) {
			star += '*'
		}
		console.log(star)
	}
	
} */
/*
function stars2 (n) {
	var i=1
	var star =''
	var newStr =''
	while (i<=n){
		newStr += '*'
		i++
		console.log(newStr)
	}
	while (1<n) {
		newStr =''
		var star =''
		i=n
		while (1<i){
			star += '*'
			i--
		}
		newStr += star
		console.log(newStr)
		n--
	}
}
*/
//遇到困難：怎麼倒著印金字塔？
//技巧：每次迴圈之後將字串變成空字串
//能不能用 for 迴圈做做看？
//能不能用 do while 做做看？ 

/*

*/