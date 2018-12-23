console.log(star(1))
console.log(star(5))
console.log(star(10))

function star(n) {
	let result = ''
	for (let i=1; i<=n; i++) result += '*'
	return result
}

/*
function starResult(n) {
	var result =''
	while (0<n) {
		result += '*'
		n--
	}
	return result
}
*/
