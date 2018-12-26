tree(1)
tree(2)
tree(5)
tree(10)

function tree(n) {
	leaf(n)
	trunk(n)
	console.log('')
}

function leaf(n) {
	for(let i=1; i<=n; i++) {
		let leaf = ''
		for(let j=i; j<n; j++) {
			leaf += ' '
		}
		leaf += '*'
		for(let j=i; 1<j; j--) {
			leaf += '**'
		}
		console.log(leaf)
	}
}

function trunk(n) {
	if(n===1) return
	else {
		let trunk =''
		for(let i=1; i<n; i++) {
			trunk += ' '
		}
		trunk += '*'
		for(let i=1; i<=n; i++) {
			console.log(trunk)
			
		}
	}
}

/* 

function tree(n) {
	var resultLeaf =''
	var resultStem =''
	var counter = n
	var air = n
	var leaf = 0
	var originLeaf =0
	var stem =n

	while (0<counter) {
		resultLeaf = ''
		air = counter
		while (0<air-1) {
		resultLeaf += ' '
		air--
		}
		resultLeaf += '*'
		originLeaf++
		leaf = originLeaf
		while (1<leaf) {
			resultLeaf += '**'
			leaf--
		}
		console.log(resultLeaf)
		counter--
	}

	while (0<stem-1) {
		resultStem += ' '
		stem--
	}
	stem = n
	if (stem>1) {
		resultStem += '*'	
	}
	while (0<stem) {
		console.log(resultStem)
		stem--	
	}
} */
//拆解問題
//樹葉、樹幹

/*
#樹葉
-星星：2n-1
-空格：n-1


#樹幹：n-1
-空格：n-1
*/
/*
下次的練習方向
比對 while 迴圈的做法和 for 迴圈的做法

*/



// 經驗總結：輸入的 n 保留不要更動
// 迴圈之後要不要回到初始狀態？初始值是什麼？	

//tree(10)
//極其不熟 需要刻意練習
/* 20180920 for loop function in function
將問題拆成三個部分
1 空氣
2 樹葉
3 樹幹
tree(1)的*是樹葉還是樹幹？
我定義他為樹葉
*/
/* function tree(n) { //只有自己推想對了才測試
//for 與 while 迴圈最大的差異在巢狀迴圈的時候，會不會重設初始值。
//不需要用重設初始值用 while 迴圈
//for 迴圈可以不設定初始值嗎？在迴圈之外設定
// n 就是 const
	for (let i=n; i>0; i--) { //巢狀迴圈第一層一律用 i 第二層一律用 j
		let result1 =''
		let resultAir = ''
		for (let j=i-1; j>0; j--) {
			resultAir += '-'
		}
		result1 += resultAir
		result1 += '*'
		for(let j=n-i; j>0; j--) {
			result1 +="**"
		}
		console.log(result1)
	}
	let result2 =''
	for (let i=n-1; i>=1; i--) {
		result2 += '_'
	}
	if (n>1) result2 += '*'
	for (let i=0; i<n ;i++) {
		console.log(result2) 
	}
	
} */
/* version 2 較好閱讀版本
function tree(n) {
	var resultLeaf =''
	var resultStem =''
	var counter = n
	var air = n
	var leaf = 0
	var originLeaf =0
	var stem =n

	while (0<counter) {
		resultLeaf = ''
		air = counter
		while (0<air-1) {
		resultLeaf += ' '
		air--
		}
		resultLeaf += '*'
		originLeaf++
		leaf = originLeaf
		while (1<leaf) {
			resultLeaf += '**'
			leaf--
		}
		console.log(resultLeaf)
		counter--
	}

	while (0<stem-1) {
		resultStem += ' '
		stem--
	}
	stem = n
	if (stem>1) {
		resultStem += '*'	
	}
	while (0<stem) {
		console.log(resultStem)
		stem--	
	}
}
//拆解問題
//樹葉、樹幹

#樹葉
-星星：2n-1
-空格：n-1

#樹幹：n-1
-空格：n-1

// 經驗總結：輸入的 n 保留不要更動
// 迴圈之後要不要回到初始狀態？初始值是什麼？	
*/

/* version 1 難以閱讀
function tree(n) {
	var result =''
	var result2 =''
	var origin = n
	var i = n
	var p = 0
	var originp =0
	while (0<i) {
		originp++
		p = originp
		result =''
		n=i
		while (0<n-1) {
		result += ' '
		n--
		}
		result += '*'
		while (1<p) {
			result += '**'
			p--
		}
		console.log(result)
		i--
	}

	n=origin
	while (0<n-1) {
		result2 += ' '
		n--
	}
	n=origin
	if (n>1) {
		result2 += '*'	
	}
	while (0<n) {
		console.log(result2)
		n--	
	}
	
}
*/
//最後的 p 需要處理一下
//拆解問題
//樹葉、樹幹

/*
#樹葉
-星星：2n-1
-空格：n-1


#樹幹：n-1
-空格：n-1
*/
