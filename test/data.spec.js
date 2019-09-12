global.window = global;
global.assert = require('chai').assert;
require('../src/data/worldbank/worldbank.js');
require('../src/data.js');
require('./data.spec.js');

describe('window.worldBank',()=>{
  it('debería ser un objeto',()=>{
    assert.equal(typeof window.worldBank, 'object');
  })
})


describe ('window.worldBank.filterCountry', () => {
  const muestra={ 
    PER:{ indicators: "Array(139)"}, 
    MEX:{ indicators: "Array (139)"}
  };

  it('debería ser una función', () => {
    assert.equal(typeof window.worldBank.filterCountry, 'function');
  });

  it('debería retornar el objeto "PER"', () => {
    assert.deepEqual(
      window.worldBank.filterCountry(muestra, {
        PER: { indicators:"Array (139)"}
  })
  );
});
});


