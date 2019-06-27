const chai = require('chai');
const expect = chai.expect;

var Game = require('../src/Game.js');

describe('Game', function() {
  
  it('should return 2 for testing', function(){
    const game = new Game();
    expect(game.start()).to.equal(2);
  });
  
  it('should be a function', function() {
    const game = new Game();
    expect(game).to.be.a('function');
  });
  
  it('should return something', function(){
    var results = Game.printQuestion(2);
    expect(results).to.equal(2);
  });

  it('should console log a message', function(){
    expect(Game.printMessage()).to.include(`Welcome to FlashCards! You are playing with cards.
    -----------------------------------------------------------------------`);
  });

});

