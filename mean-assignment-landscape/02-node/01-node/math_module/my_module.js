module.exports = function() { 
	return {
		greet: function() {
			console.log("Let's do some math computation");
		},
		add: function(num1, num2) {
			console.log("The sum is: ", num1 + num2);
		},
		multiply: function(num1, num2) {
			console.log("The product is: ", num1 * num2);
		},
		square: function(num) {
			console.log("The square is: ", num * num);
		}, 
		random: function(num1, num2) {
			console.log("The random number is: ", Math.floor(Math.random() * num2) + num1);
		}
	}	
}