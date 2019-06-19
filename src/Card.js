class Card{
  constructor(num, question, options, correctAnswer){
    this.num = num;
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    }

}

////////////Turn Class
class Turn{
  constructor(userAnswer, card){
    this.userAnswer = userAnswer;
    this.card = card;
  }

  returnGuess(){
    return this.userAnswer;
  }

  returnCard(){
    return this.card;
  }

  evaluateGuess(){
    if(this.userAnswer == this.card.correctAnswer){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(){
    if(this.userAnswer == this.card.correctAnswer){
      return "correct!";
    } else{
      // console.log(`incorrect as.... ${this.evaluateGuess()}`);
      // console.log(typeof this.evaluateGuess());
      return "incorrect!";
    }
  }
  
}


////////////////Deck Class
class Deck{
  constructor(cardNum){
    this.cardNum = cardNum;
  }

  countCards(){
    const newArray = this.cardNum.reduce((acc, card) => {
        acc.push(card) 
        return acc
    }, []);
    return newArray.length;
  }

  cardDetails(){
        const newArray = this.cardNum.reduce((acc, card) => {
        acc.push(card) 
        return acc
    }, []);
    // console.log(newArray);
    return newArray;
  }

}




///////////////Round Class//
//takes and records guess also compares to evaluateGuess() from Turn class

// class Round extends Turn{
//   constructor(deck, userAnswer, card){
//     super(userAnswer, card);
//     this.deck = deck;
//     this.incorrectguesses = [];
//   }
class Round {
  constructor(deck){
    this.deck = deck;
    this.incorrectguesses = [];
    this.turn = new Turn();
  }
  
  returnCurrentCard(){
    ///////method that returns the current card being played
    var detailsCard = deck.cardDetails();
    return detailsCard[0];
  }
  
  //takeTuren not working.....6.18.2019 ............1:43pm issue was I wasn't relating it to a certain turn. Working with specific then will generalize it
  takeTurn(){
    const results = this.turn("ETF", card);
    return results;
  }

  calculatePercentCorrect(){
//method that calculates and returns the percentage of correct guesses
  }

  endRound(){
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!
    console.log(`**Round Over!** You answered ${calculatePercentCorrect()}% of the questions correctly!`);
  }

}

/////////Cards -Creating new Cards with details
const card = new Card(1, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const card4 = new Card(10, 'What is George\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Lex');


//////Turns -Creating new turns that take user answer and compares againes card
const turn = new Turn("Bonds", card);
const turn2 = new Turn("single stock", card);
const turn3 = new Turn("ETF", card);

///Function to output into Console Turn details 
function sayIt(ar1){
  console.log(ar1);
};

function sayItAgain(turnNum){
  sayIt(turnNum.returnGuess());
  sayIt(turnNum.returnCard());
  sayIt(turnNum.evaluateGuess());
  sayIt(turnNum.giveFeedback());
}

// To check turns details 
// sayItAgain(turn);
// sayItAgain(turn2);
// sayItAgain(turn3);



//////////Deck - to issues a new Deck with certain cards - right now all the cards I made
const deck = new Deck([card, card1, card2, card1, card3, card4]);

//////////Round - to create a first round with the deck of cards 
const round1 = new Round(deck);

const round1Result = round1.takeTurn("stock");
console.log(`Hello ${round1Result}`);
console.log(round1Result);

//Checking how many cards are in Deck - working 06/18 ...12:44pm
// console.log("Deck count "+deck.countCards());

//Checking if card details are coming out --working 06/18 @ 12:45pm
// var detailsCard = deck.cardDetails();
// console.log(detailsCard);

//Checking if first card is working - Yes it is 06/18/2019 @ 12:46pm 
// const firstCard = round1.returnCurrentCard();
// console.log(firstCard);


// console.log(firstCard);
// console.log("The round has the first card, did it work? " + firstCard); 
// console.log(deck);
// console.log(round.takeTurn());
