console.log(makeStars(1))
console.log(makeStars(2))
console.log(makeStars(5))

function makeStars(n) {
	let star = ''
	let result = ''
	for(let i=1; i<=n; i++) {
		star += '*'
		result += star
		if(n-i>0) result += '\n'
	}
	return result
}

// 20180918 我覺得有點難
/* function makeStars (n) {
	let result = ''
	let star = ''
	for (let i=1; i<=n; i++) {
		star += '*' //star 負責累積星星
		result += star //result 負責累積成果
		result += (n-i===0)? '':'\n' //最後一個不加星星
	}
	return result
} */
/* version1
function makeStars (n) {
	var i=0
	var newStr = ''
	var star = ''	
	while (i<n) {
		star += '*'
		newStr += star
		i++
		if (i<n) {
		newStr += '\n'
		}	
	}
	return newStr
}
*/

/*
console.log('*')
console.log("*\n**") 
console.log('*\n**\n***\n****\n*****\n')
*/

//先想五分鐘想不到就先試試看
//n++ ++n 有什麼不同？