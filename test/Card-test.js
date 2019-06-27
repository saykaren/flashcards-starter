const chai = require('chai');
const expect = chai.expect;

// var Card = require('../src/Card.js');
// var Turn = require('../src/Card.js');
var myClasses = require('../src/Card.js');

describe('Card', function() {
  
  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });  
  
  it('should store a question', function() {
    const card = new Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
    expect(card.question).to.equal("What is Karen\'s favorite investment");
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
 
});


describe('Turn', function() {

  it('should return the users answer', function(){
    const card = new Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
    const turn = new Turn("ETF", card);
    expect(turn.userAnswer).to.equal("ETF");
  });
  
  it('should return guess', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turnCard = new Turn('object', card);
    expect(turnCard.evaluateGuess()).to.equal(true);
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  });

});
  





