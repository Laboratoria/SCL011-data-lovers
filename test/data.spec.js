global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('../src/data/pokemon/pokemon');
require('./data.spec.js');


describe('window.pokemon', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof window.pokemon, 'object');
  });

  /*it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });*/
})
