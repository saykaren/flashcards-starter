class Card{
  constructor(num, question, options, correctAnswer){
    this.num = num;
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    }

}

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
      console.log(`incorrect as.... ${this.evaluateGuess()}`);
      console.log(typeof this.evaluateGuess());
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

sayItAgain(turn);
sayItAgain(turn2);

class Deck{
  constructor(cardNum){
    this.cardNum = cardNum;
    // this.array = array;
  }

  countCards(){
    let newArray = [];    
    for(let i=0; i<this.cardNum.length; i++){
      newArray.push(this.cardNum[i]);
      console.log("NewArray is the following"+newArray+"That is "+newArray.length);
    };
    return newArray.length;
  }

  arrayList(){
    const result =[];
    result.push(this.card);
    return result;
  }
}


const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

const deck = new Deck([card1, card2, card3]);

console.log("Deck count"+deck.countCards());
// console.log("Deck contents"+deck.arrayList());
