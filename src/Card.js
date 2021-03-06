class Card{
  constructor(num, question, answers, correctAnswer){
    this.num = num;
    this.question = question;
    this.answers = answers;
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
    return newArray;
  }

}


///////////////Round Class//
class Round {
  constructor(deck){
    this.deck = deck;
    this.incorrectguesses = 0;
    this.turns = 0;
    this.filteredDeck = this.deck;
  }    

  returnCurrentCard(){
    ///////method that returns the current card being played
    const detailsCard = this.deck.cardDetails();
    return detailsCard[0];
  }
  
  takeTurn(userGuess){ 
    const newTurn = new Turn(userGuess, this.returnCurrentCard());
    const results = newTurn.evaluateGuess();
    this.turns++;
    if (!results) {
      this.incorrectguesses++;
      return "Incorrect";
    } else {
      this.filteredDeck = this.deck.cardNum.shift();
      return "correct!";
    };
  }

  calculatePercentCorrect(){
    const percentRight = ((this.turns - this.incorrectguesses)/this.turns)*100;
    return percentRight;
  }

  endRound(){
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!
    const result = round1.calculatePercentCorrect();
    console.log(`**Round Over!** You answered ${result}% of the questions correctly!`);    
  }

}

/////////Cards -Creating new Cards with details
// const card = new Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
// const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
// const card4 = new Card(10, 'What is George\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Lex');
// console.log(card.num);

//////Turns -Creating new turns that take user answer and compares againes card
// const turn = new Turn("Bonds", card);
// const turn2 = new Turn("single stock", card);
// const turn3 = new Turn("ETF", card);


//////////Deck - to issues a new Deck with certain cards - right now all the cards I made
// const deck = new Deck([card, card1, card2, card1, card3, card4]);

//////////Round - to create a first round with the deck of cards 
// const round1 = new Round(deck);

// round1.takeTurn("stock");
// round1.takeTurn("bonds");
// round1.takeTurn("under my mattress fool");
// round1.takeTurn("Realestate");
// round1.takeTurn("ETF");


// module.exports= Card, Turn;

module.exports= {
  Card,
  Turn,
  Deck,
  Round,
}

// var filterVar = prototypeData[0].id;
// var filtered = prototypeData[0].id.filter(x=>prototypeData[x].id !== prototypeData[0].id);