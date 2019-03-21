
var arr = ['1', '2', '3', '4', '5', '6', '7', '8'];

var _ =  {
	map: function(arr, callback) {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = callback(arr[i]);
		}
	}, 
	reduce: function(arr, callback, memo) {
		let collector = 0;
		if (!memo) {
			memo = arr[0];
			collector = 1;
		}
		for (let i = collector; i < arr.length; i++) {
			memo = callback(arr[i], memo);
		}
		return memo;
	},
	find: function(arr, callback) {
		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				return arr[i];
			}
		}
	},
	filter: function(arr, callback) {
		var array = [];
		for (let i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				array.push(arr[i]);
			}
		}
		return array;
	},
	reject: function(arr, callback) {
		var array = [];
		for (let i = 0; i < arr.length; i++) {
			if (!callback(arr[i])) {
				array.push(array[i]);
			}
		}
		return array;
	}
}

_.map(arr, function callback(element) { return element * 5; });
console.log(arr);

var evens = _.filter(arr, function callback(element) { return element % 2 == 0; });
console.log(evens);