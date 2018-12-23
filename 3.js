// 練習三：寫一個能夠印出 n 個 * 的函式 （禁止使用內建函式 repeat）
// 如果使用內建 repeat 函式怎麼做 ？
// 如何自己寫一個內建函式 repeat ？
star(1)
star(5)
star(10)

function star(n) {
	let repeat = ''
	for(i=1; i<=n; i++) repeat += `*`
	console.log(repeat)
}

/* function starConsole(n) {
	var result =''
	do {
		result += '*'
		n--
	} while (0<n)
	console.log(result)
}

function starConsole(n) {
	var result =''
	for (var i=1; i<=n ; i++) {
		result += '*'
	}
	console.log(result)
}

function starConsole(n) {
	var result =''
	var i = 1
	while (i <= n){
		result += '*'
		i++
	}
	console.log(result)
}


// while 比較不直觀
function starConsole(n) {
	var result =''
	var i = 0
	while (i < n){
		result += '*'
		i++
	}
	console.log(result)
}


function starConsole(n) {
	var result =''
	while (0<n) {
		result += '*'
		n--
	}
	console.log(result)
}

//產生一個空間
//產生一個星星
//將星星加入這個空間
//印出這個空間 */