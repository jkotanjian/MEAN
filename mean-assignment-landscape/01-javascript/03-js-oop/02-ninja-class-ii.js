$(document).ready(function() {

	function Ninja(name) {
		this.name = name;
		this.health = 100;
		var speed = 3;
		var strength = 3;

		this.showStats = function() {
			console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
			return this;
		}

		this.kick = function(ninja) {
			var damage = strength * 5;
			ninja.health -= damage;
			console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " health!");
			return this;
		}	
	}
	Ninja.prototype.sayName = function() {
		console.log("My ninja name is " + this.name);
		return this;
	}
	Ninja.prototype.drinkSake = function() {
		this.health += 10;
		return this;
	}
	Ninja.prototype.punch = function(ninja) {
		ninja.health -= 5;
		console.log(ninja.name + " was punched by " + this.name + " and lost 5 health!");
		return this;
	}	
	var blueNinja = new Ninja("Naruto");
	var redNinja = new Ninja("Sakura");

	blueNinja.sayName();
	redNinja.sayName();

	blueNinja.punch(redNinja);
	redNinja.kick(blueNinja);

	blueNinja.showStats();
	redNinja.showStats();
});		