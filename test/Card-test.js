const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

// const Card = require('../src/Card');
import Card from '../src/Card.js';
// import {Turn} from '../src/Card.js';

console.log(Card);


describe('Card', function() {

  
  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it.skip('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });  
  
  it.skip('should store a question', function() {
    const card = new Card(20, "What is Karen\'s favorite investment", ["single stock", "ETF", "Bonds", "Realestate", "under my mattress fool"], "ETF");
    expect(card.question).to.equal("What is Karen\'s favorite investment");
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

// describe("Testing", function(){
//   it("should be working", function(){
//     // const resultFirst = "Karen";
//     // expect(sayBye(resultFirst)).to.equal("Hello Karen");
//     expect(sayBye).to.equal("Hello Karen");
//     });

//     it('should store a question', function() {
//       const card = TestingNow;
//       expect(card.question).to.equal("What is Karen\'s favorite investment");
//     });
// });


