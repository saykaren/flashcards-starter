const chai = require('chai');
const expect = chai.expect;

var Game = require('../src/Game.js');

describe('Game', function() {
  //was using when it was just returning the array
  it.skip('should return an Array for testing', function(){
    const game = new Game();
    expect(game.start()).to.be.an('array');
  });
  //use for counting cards
  it('should return 30 as there is 30 cards', function(){
    const game = new Game();
    expect(game.start()).to.equal(30);
  });

});

