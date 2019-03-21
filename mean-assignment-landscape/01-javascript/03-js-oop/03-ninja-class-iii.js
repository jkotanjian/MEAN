$(document).ready(function() {

class Ninja {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}
	showStats() {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
	}
	sayName() {
		console.log(`My ninja name is ${this.name}!`);
	}
	drinkSake() {
		this.health += 10;
		return this;
	}
}
class Sensei extends Ninja {
	constructor(name) {
		super(name);
		this.health = 200;
		this.speed = 10;
		this.strength = 10;
		this.wisdom = 10;
	}
	speakWisdom() {
		super.drinkSake();
		console.log("The next generation will always surpass the previous one. It's one of the never-ending cycles in life.")
	}
	showStats() {
		console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
	}
}
	var superSensei = new Sensei("Kakashi")
	superSensei.speakWisdom();
	superSensei.showStats();
});