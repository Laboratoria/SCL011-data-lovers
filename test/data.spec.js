global.window = global;
global.assert = require('chai').assert;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');


describe('mostPower()', () => {
  

  it('debería ser una función', () => {
    assert.equal(typeof window.mostPower, 'function');
  });

  it('debería retornar "10"', () => {
    assert.equal(example(), 'example');
  });
})
