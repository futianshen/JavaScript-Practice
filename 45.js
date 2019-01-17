/*
請你自己寫出一段程式碼，是判斷一個叫做 score 的變數是否及格（超過或剛好 60 分），如果及格的話就輸出 pass，否則輸出 fail。
進階練習：
除了判斷是否及格以外，也請你對滿分做出特別判斷，如果是 100 分的話就輸出 you are no1!
*/

pass(34)
pass(59)
pass(60)
pass(100)

function pass (score) {
	if ( score === 100 ) {
		console.log("you are no1")
	} else if ( 60 < score || 60 === score ) {
		console.log('pass')
	} else {
		console.log('fail')
	}
}