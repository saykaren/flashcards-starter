class Card{
  constructor(num, question, options, correctAnswer, userAnswer){
    this.num = num;
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = userAnswer;
  }

  // compareCard(){
  //   if(this.userAnswer == this.correctAnswer){
  //     return this.userAnswer;
  //   }
  //   else {
  //     return "Incorrect";
  //   }
  // }

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
    if(this.userAnswer == this.card){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(){
    if(this.evaluateGuess == true){
      return "correct!";
    } else{
      return "incorrect!";
    }
  }
  
}

const card = new Card(1, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
const turn = new Turn('single stock', card);
turn.returnGuess()
turn.returnCard()
turn.evaluateGuess()
turn.giveFeedback()