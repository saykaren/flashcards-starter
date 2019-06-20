const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const card = require('../src/Card');
const CardNum = require('../src/Card');
const sayBye = require('../src/Card');
// const Turn = require('.../src/Card');

// //Results
// sayHi = sayBye.sayBye();

describe('Card', function() {

  it.skip('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });  
  
  it.skip('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it.skip('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it.skip('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });

  it.skip('testing', function() {
    // const card = new Card(1, "Hello", ["me", "you"], "you");
    // expect(card.num).to.equal("1");
    const results = 1;
    expect(results).to.equal(1);
  });

 
});

describe("Testing", function(){
  it("should be working", function(){
    const resultFirst = "Karen";
    expect(sayBye(resultFirst)).to.equal("Hello Karen");
    });
});


