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

const card = new Card(1, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
const turn = new Turn("ETF", card);
const turn2 = new Turn("ETF", card);


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

// sayItAgain(turn);
// sayItAgain(turn2);

////////////////Deck Class
class Deck{
  constructor(cardNum){
    this.cardNum = cardNum;
  }

  countCards(){
    ///reduce - Maire suggested 
    // let newArray = [];    
    // for(let i=0; i<this.cardNum.length; i++){
    //   newArray.push(this.cardNum[i]);
    //   console.log("NewArray is the following"+newArray+"That is "+newArray.length);
    // };
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
    console.log(newArray);
    return newArray;
  }

}


const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const card4 = new Card(10, 'What is George\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Lex');

const deck = new Deck([card2, card1, card3, card4]);

// console.log("Deck count "+deck.countCards());
// console.log("cardDetails are "+ deck.cardDetails());

//below is working 06/11/2019 but need to extract in Round class -3:41
var detailsCard = deck.cardDetails();
// console.log(detailsCard[0]);
// console.log(`Hello `+detailsCard[0]["correctAnswer"]);

///////////////Round Class//
//takes and records guess also compares to evaluateGuess() from Turn class
class Round {
  constructor(deck){
    this.deck = deck;
  }
  ///////////Maire help I am able to extract a sub array like out of this below I can get it to say 1 but I cannot seem to get the whole array to extract 6-11 3:47pm
  returnCurrentCard(){
    ///////method that returns the current card being played
    var detailsCard = deck.cardDetails();
    console.log(detailsCard[0]);
    console.log(`Hello `+detailsCard[0]["num"]);
    return detailsCard[0];
  }
  
  takeTurn(){

  }

  calculatePercentCorrect(){
//method that calculates and returns the percentage of correct guesses
  }

  endRound(){
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }

}

const round = new Round(deck);
const firstCard = round.returnCurrentCard();

///Maire help how can I pull out a whole array? I can get a single section but not the whole array - per requirement should not only be the 
console.log(firstCard);
// console.log("The round has the first card, did it work? " + firstCard); 
// console.log(deck);