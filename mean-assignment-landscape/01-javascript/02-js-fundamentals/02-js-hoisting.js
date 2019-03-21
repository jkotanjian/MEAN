// 1. 
// GIVEN
// console.log(hello);                                   
// var hello = 'world';     

var hello;
console.log(hello); // LOGS: undefined
hello = 'world'; // LOGS: world


// 2.
// GIVEN
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle;
function test() {
	var needle;
	needle = 'magnet';
	console.log(needle); // LOGS: magnet
}
needle = 'magnet'
test() // LOGS: undefined


// 3.
// var brendan = 'super cool';
// function print(){
//   brendan = 'only okay';
//   console.log(brendan); 
// }
// console.log(brendan);

var brendan;
function print() {
	var brendan;
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super_cool';
console.log(brendan); // LOGS: super cool


// 4.
// GIVEN
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//   food = 'half-chicken';
// 	 console.log(food); 
//   var food = 'gone';
// }

var food;
function eat() {
	var food;
	food = 'half-chicken';
	console.log(food); 
	food = 'gone';
}
food = 'chicken' 
console.log(food); // LOGS: chicken 
eat() // LOGS: half-chicken


// 5.
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

var mean;
function ?

or

var mean;
function() {
	food = 'chicken'
	console.log(food)
	food = 'fish'
	console.log(food)
}	
mean()
mean = function()
console.log(food) // LOGS: Error: mean is not a function


// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

var genre;
function rewind() {
	genre = "rock"
	console.log(genre); 
	var genre = "r&b";
	console.log(genre); 
}
console.log(genre); // LOGS: undefined
genre = 'disco'
rewind() // LOGS: rock, r&b
console.log(genre) // LOGS: disco


// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

dojo = "san jose";
console.log(dojo); // LOGS: san jose
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn() // LOGS: seattle, burbank
console.log(dojo); // LOGS: san jose


// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

const dojo = {}
function makeDojo(name, students) {
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) {
		dojo.hiring = true;
	}
	else if (dojo.students <= 0) {
		dojo = "closed for now";
	}
	return dojo;
}
console.log(makeDojo("Chicago", 65)); // LOGS: name: Chicago, students: 65, hiring: true
console.log(makeDojo("Berkeley", 0)); // LOGS: Error: Assignment to constant variable. (because dojo was created as a constant - it cannot be changed and will remain the first assignment it recieved)
