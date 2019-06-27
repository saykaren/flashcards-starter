const chai = require('chai');
const expect = chai.expect;

var Game = require('../src/Game.js');

describe('Game', function() {
  //was using when it was just returning the array
 
  it('should print a welcome notice', function(){
    const game = new Game();
    expect(game.currentRound).to.equal(0);
  });

  it('should be a function, Game class', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

});

