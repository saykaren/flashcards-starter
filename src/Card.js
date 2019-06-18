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
class Round extends Turn{
  constructor(deck, userAnswer, card){
    super(userAnswer, card);
    this.deck = deck;
    this.incorrectguesses = [];
  }
  
  returnCurrentCard(){
    ///////method that returns the current card being played
    var detailsCard = deck.cardDetails();
    return detailsCard[0];
  }
  
  //takeTuren not working.....6.18.2019 ............10:31am
  takeTurn(){
    /////////boolean if guess was right
    //const newTurn = new Turn(Turn.returnGuess(), card);
    
    // const newTurn = new Turn(super.userAnswer, super.card);
    // console.log(super.userAnswer);
    // console.log(super.card);
    // console.log(newTurn);

    // console.log(newTurn);
    // console.log(turn);
    // console.log(super.evaluateGuess());
    // console.log(this.returnCurrentCard());
    // var result = 
    // console.log(this.incorrectguesses);
    // if (turn.evaluateGuess() !== true){
    //   this.incorrectguesses.push(deck.cardDetails());
    // }
    // console.log(turn.evaluateGuess());
    // return newTurn;
    // return result;
    // return newTurn;
  }

  calculatePercentCorrect(){
//method that calculates and returns the percentage of correct guesses
  }

  endRound(){
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!
    console.log(`**Round Over!** You answered ${calculatePercentCorrect()}% of the questions correctly!`);
  }

}


const card = new Card(1, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
const turn = new Turn("Bonds", card);
const turn2 = new Turn("single stock", card);
const turn3 = new Turn("ETF", card);


turn.returnGuess()
turn.returnCard()
turn.evaluateGuess()
turn.giveFeedback()

function sayIt(ar1){
  console.log(ar1);
};

function sayItAgain(turnNum){
  sayIt(turnNum.returnGuess());
  sayIt(turnNum.returnCard());
  sayIt(turnNum.evaluateGuess());
  sayIt(turnNum.giveFeedback());
}

sayItAgain(turn);
sayItAgain(turn2);
sayItAgain(turn3);


const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const card4 = new Card(10, 'What is George\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Lex');

const deck = new Deck([card, card1, card2, card1, card3, card4]);

console.log("Deck count "+deck.countCards());
// console.log("cardDetails are "+ deck.cardDetails());

var detailsCard = deck.cardDetails();

const round = new Round(deck);
const firstCard = round.returnCurrentCard();


// console.log(firstCard);
// console.log("The round has the first card, did it work? " + firstCard); 
// console.log(deck);
console.log(round.takeTurn());
