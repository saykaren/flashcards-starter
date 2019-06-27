const chai = require('chai');
const expect = chai.expect;

var Game = require('../src/Game.js');

describe('Game', function() {
  
  it('should return an Array for testing', function(){
    const game = new Game();
    expect(game.start()).to.be.an('array');
  });

});

