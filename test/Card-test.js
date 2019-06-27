const chai = require('chai');
const expect = chai.expect;

var myClasses = require('../src/Card.js');

describe('Card', function() {
  
  it('should be a function', function() {
    const card = new myClasses.Card();
    expect(myClasses.Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new myClasses.Card();
    expect(card).to.be.an.instanceof(myClasses.Card);
  });  
  
  it('should store a question', function() {
    const card = new myClasses.Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
    expect(card.question).to.equal("What is Karen\'s favorite investment");
  });  

  it('should store a list of possible answers', function() {
    const card = new myClasses.Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new myClasses.Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
 
});


describe('Turn', function() {

  it('should return the users answer', function(){
    const card = new myClasses.Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
    const turn = new myClasses.Turn("ETF", card);
    expect(turn.userAnswer).to.equal("ETF");
  });
  
  it('should return guess', function(){
    const card = new myClasses.Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnCard = new myClasses.Turn('object', card);
    expect(turnCard.evaluateGuess()).to.equal(true);
  });

});
  





