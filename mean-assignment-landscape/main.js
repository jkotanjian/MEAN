// var myVar = 'this is a string';
// myVar = 234234;
// console.log(myVar);
// // 234234

// var array = ['dog','cat', 'horse'];
// array.push(myVar);
// array.pop(array.pop[1])
// console.log(array);
// // 234234
// // ['dog', 'cat', 'horse', 234234]
// // ['dog', 'cat', 'horse']

// var[dog] = array; // like saying: var dog = array[0]
// console.log[dog];
// // dog
// var[cat] = array; // Like saying: var cat = array[1]
// console.log[cat];
// // cat
// var[dog, cat] = array;
// console.log(dog, cat)
// // dog, cat
// var[dog, , cat] = array;
// console.log(dog, cat);
// // dog, horse

// for (var index = 0; index<array.length; index++){
// 	console.log('index is ' + index, array[index]);
// }
// // 234234
// // ['dog', 'cat', 'horse']
// // index is 0 dog
// // index is 1 cat
// // index is 2 horse

// for (var element of array) {          
// 	// using for/of you cannot access or get what the index # is
// 	console.log('element is ' + element)
// }
// // 234234
// // ['dog', 'cat', 'horse']
// // index is 0 dog
// // index is 1 cat
// // index is 2 horse
// // element is dog
// // element is cat
// // element is horse

// for (var element of array.entries()) {
// 	console.log('element is ', element)
// }
// // 234234
// // [ 'dog', 'cat', 'horse' ]
// // index is 0 dog
// // index is 1 cat
// // index is 2 horse
// // element is dog
// // element is cat
// // element is horse
// // element is  [ 0, 'dog' ]
// // element is  [ 1, 'cat' ]
// // element is  [ 2, 'horse' ]

// for (var [index, element] of array.entries()) {
// 	console.log('element is ', element, index)
// }
// // element is  dog 0
// // element is  cat 1
// // element is  horse 2

// var person = {
// 	hair: 'brown',
// 	eyes: 'blue',
// 	height: 5.3,
// 	age: 36,
// };

// person['weight'] = 129;
// console.log(person);

for (var property in person) {
	console.log('property is ', property);
}
// { hair: 'brown', eyes: 'blue', height: 5.3, age: 36, weight: 129 }
// property is  hair
// property is  eyes
// property is  height
// property is  age
// property is  weight

for (var property in person) {
	console.log('property is ', person.property);
}
// { hair: 'brown', eyes: 'blue', height: 5.3, age: 36, weight: 129 }
// property is  hair
// property is  eyes
// property is  height
// property is  age
// property is  weight
// property is  undefined
// property is  undefined
// property is  undefined
// property is  undefined
// property is  undefined


// var person = {
// 	hair: 'brown',
// 	eyes: 'blue',
// 	height: 5.3,
// 	age: 36,
// 	property: 'this is a property'
// };
// person['weight'] = 129;
// console.log(person);

for (var property in person) {
	console.log('property is ', property, person.property);
}

// { hair: 'brown',
//   eyes: 'blue',
//   height: 5.3,
//   age: 36,
//   property: 'this is a property',
//   weight: 129 }
// property is  hair this is a property
// property is  eyes this is a property
// property is  height this is a property
// property is  age this is a property
// property is  property this is a property
// property is  weight this is a property

var person = {
	hair: 'brown',
	eyes: 'blue',
	height: 5.3,
	age: 36,
	property: 'this is a property'
};
person['weight'] = 129;
console.log(person);

for (var property in person) {
	console.log('property is ', property, person[property]);
}

// { hair: 'brown',
//   eyes: 'blue',
//   height: 5.3,
//   age: 36,
//   property: 'this is a property',
//   weight: 129 }
// property is  hair brown
// property is  eyes blue
// property is  height 5.3
// property is  age 36
// property is  property this is a property
// property is  weight 129