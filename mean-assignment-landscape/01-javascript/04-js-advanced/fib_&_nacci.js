function fib() {
	var start = 0, num = 1, placeholder;
	
	function nacci() {
		placeholder = num;
		num = start + num;
		start = placeholder;
		console.log(start);
	}
	return nacci
}
var fibCounter = fib();

fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()