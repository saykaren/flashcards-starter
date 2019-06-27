const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

var myClasses = require('../src/Card.js');

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
    
// Creates Cards from data in data.js which is an Array with Objects
   const cards = prototypeQuestions;

   //properly putting those cards into the Deck
   const mydeck = new myClasses.Deck(cards);

   // Creates a new Round using the Deck
   const newRound = new myClasses.Round(mydeck);

   return newRound.takeTurn("george");


// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  }
}

module.exports = Game;