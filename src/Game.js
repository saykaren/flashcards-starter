const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    // this.currentRound = currentRound;
    // this.deck = deck;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    
// Creates Cards
   const cards = prototypeQuestions;
   return cards;
// Puts Cards in a Deck
  // const deck = new deck(this.prototypeQuestions);
// Creates a new Round using the Deck
// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  }
}

module.exports = Game;