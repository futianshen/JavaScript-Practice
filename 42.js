/*
BMI 值的計算公式為：體重 / 身高^2。
假設體重是 70，身高是 180(1.8m)，BMI 就是 70/(1.8*1.8) = 21。
現在請你寫出一個簡單的 BMI 計算器，用兩個變數代表體重跟身高，算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。
體重過輕：BMI < 18.5
正常範圍：18.5 <= BMI < 24
過重：24 <= BMI < 27
輕度肥胖：27 <= BMI < 30
中度肥胖：30 <= BMI < 35
重度肥胖：35 <= BMI
*/

bmi(70,1.8)

//用 switch 寫一次看看
//邏輯運算子的使用順序 + — * / < = >

//180912
function bmi (weight,height) {
	var BMI = weight/(height*height)
	if (BMI <18.5 ) {
		console.log('體重過輕')
	} else if (BMI < 24 && 18.5<= BMI){
		console.log('正常範圍')
	} else if (BMI < 27 && 24<= BMI) {
		console.log('過重')
	} else if (BMI < 30 && 27<= BMI) {
		console.log('輕度肥胖')
	} else if (BMI < 35 && 30<= BMI) {
		console.log('中度肥胖')
	} else {
		console.log('重度肥胖')
	}
}