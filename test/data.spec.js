global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


/*describe('example', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})*/
describe('data', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof data, 'objeto');
  })
})

describe('data.filter', () => {
  it('debería ser una función', () => {
    assert.equal(typeof data.filter, 'function');
  });
  
  it('debería retornar "noticias de TF2 Blog" al filtrar por feedlabel "TF2 Blog"', () => {
    assert.deepEqual(data.filter([1,2]), [1,2])
  })

})
