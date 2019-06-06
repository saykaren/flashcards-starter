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
      console.log(`false is for userAnswer ${this.userAnswer}`);
      console.log(`false is for this card answer ${this.card.correctAnswer}`);
      console.log(typeof this.userAnswer);
      return false;
    }
  }

  giveFeedback(){
    if(this.evaluateGuess == true){
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
// sayItAgain(turn2);