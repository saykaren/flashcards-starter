const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

var myClasses = require('../src/Card.js');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    this.currentRound = round;
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
   this.currentRound = newRound;
  
  // invokes printMessage to display the message in the CLI
   this.printMessage(mydeck, newRound);

  // invokes printQuestion to kick off our helper functions that allow interaction via the CLI
  this.printQuestion(newRound);
  }

}

module.exports = Game;