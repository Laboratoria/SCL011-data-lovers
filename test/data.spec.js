global.window = global;
global.assert = require('chai').assert;
require('../src/data/rickandmorty/rickandmorty.js');
require('../src/data.js')
require('./data.spec.js');



const muestra = {
  "results": [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    }
  }]
};

describe('filterStatusAlive', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterStatusAlive, 'function')
  });


  it('Debería retornar el objeto Rick Sanchez por filtro de Estado vivo ',() => {
    assert.deepEqual(window.data.filterStatusAlive(muestra),[{"name": "Rick Sanchez",
    "status": "Alive",}])
  })
})
