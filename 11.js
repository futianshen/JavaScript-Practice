stars(1)
stars(3) 
stars(7)

function stars(n) {
	let result = ''
	for(let i=1; i<=n; i++) {
		result += '*'
		console.log(result)
	}
}

//20180918 
/* function stars(n) {
	let newStr =''
	for (let i=1; i<=n; i++) {
		newStr += '*'
		console.log(newStr)
	}
} */
/* version 1
 
function stars (n) {
	var i=1
	var newStr = ''
	while (i<=n) {
		newStr += '*'
		console.log(newStr)
		i++
	} 
}

*/