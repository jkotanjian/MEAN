class Deck {
	constructor() {
	this.deck = [];
	}
	reset() {
		this.deck = [];
		var suits = ["Diamonds", "Spades", "Hearts", "Clubs"];
		var values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

		for (var suit of suits) {
			for (var value of values) {
				this.deck.push(`${value} of ${suit}`);
			}
		}
		return this;
	}
	shuffle() {
		let x = this.deck.length, y, z;
		while (x) {
			y = this.deck[x];
			z = Math.floor(Math.random()*x--);
			this.deck[x] = this.deck[z];
			this.deck[z] = y;
		}
		return this;
	}
	deal() {
		return this.deck.pop();
	}
}
class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
	}
	drawCard(deck) {
		this.hand.push(deck.deal());
		return this;
	}
	discard() {
		this.hand.pop();
		return this;
	}
}
var deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

var player2 = new Player("Jenny");
player2.drawCard(deck2).drawCard(deck2).discard(deck2);
console.log(player2);
console.log(deck2);