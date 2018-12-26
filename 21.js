console.log(sort([ 6, 8, 3, 2]))
console.log(sort([ 1, 2, 7 ,5]))

// 下一個解法寫一個 sort 函式，讓函式包函式
// 如果直接使用內建函式 Sort 你要怎麼做 ？


function sort (arr) {
	let result = []
	let container = arr
	for(let j=0; j<arr.length; j++) {
		let newArr = []
		let min = container[0]
		for(let i=1; i<container.length; i++) {
			if(min>container[i]) min = container[i]
		}
		result.push(min)
		let counter = 0
		for(let i=0; i<container.length; i++) {
			if(counter===0 && min===container[i]) {
				counter++
				continue
			} else {
				newArr.push(container[i])
			}
		}
		container = newArr
	}
	return result
}

/* 
為什麼錯 ？
function sort (arr) {
	let result = []
	let newArr = []
	for(let j=0; j<arr.length; j++) {
		let min = arr[0]
		for(let i=1; i<arr.length; i++) {
			if(min>arr[i]) min = arr[i]
		}
		result.push(min)
		let counter = 0
		for(let i=0; i<arr.length; i++) {
			if(counter===0 && min===arr[i]) {
				counter++
				continue
			} else {
				newArr.push(arr[i])
			}
		}
		arr = newArr
	}
} */

//不靠譜推演裡面有幾個陣列做幾次超重迴圈
// 20180919 這題要和lv2 ex10 一起解題
/* function sort (arr) {
	let min = arr[0]
	let newArr =[]
	for (let i=1; i<arr.length; i++) {
		min = (min<arr[i])? min:arr[i]
	}
	newArr.push(min)
	for (let j=1; i<arr.length; i++) {
		arr = 
	}
}
 */
/*
function sort (arr) {
	var counter1 = arr.length-1
	var newArr =[]	
	while (counter1>=0) {
		var counter2 = arr.length-1
		var result=arr[counter2]
		var b=arr[counter2-1]
		while (counter2>0) {
			if (result >= b){
				result = b
			} else if (result < b){
				result = result
			}
			counter2--	
		} 
		arr = arr.filter(function(x){ //不能用過濾的
			return x>result
		})
		newArr.push(result)
		console.log(result)
		console.log(arr)
		counter1--
	}
	console.log(newArr)
}
*/

//哪些初始值要變
//哪些初始值不變 改清楚就 OK 了
//區域變數

//一題做不出來的放棄條件？
//做了一小時 有沒有形成解題思路？只是語法搞不懂？查語法


//找到最小的數值
//把最小的數值加入新陣列
//在舊陣列中將最小的數值刪掉

//總結程式技巧

/*
function sort (arr) {
	var n = arr.length-1
	var result = arr[i]
	var newArr = []
	while (0<n) {
		var i = arr.length-1
		while (0<=i-1) {
			var a =  arr[i-1]
			if (result <= a) {
				result = result
			} else {
				result = a
			}
			i--
			arr = arr.filter(function(x) {
				return x>result
			})
			console.log(result)
			console.log(arr)
		}
		
		//console.log(result)
		//newArr.push(result)
		//console.log(newArr)
		n--
	}
}
*/