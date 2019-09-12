global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');


describe('orderABC', () => {
  const muestra ="Charizard";"Psyduck";"Bulbasaur";
  
  it('debería ser una función', () => {
    assert.equal(typeof orderABC, 'function');
  });

  
  it('debería retornar "Bulbasaur","Charizard","Psyduck" al ordenar de la "A-Z"', () => {
    assert.deepEqual(window.orderABC(muestra,"ABC"),"Bulbasaur","Charizard","Psyduck");
  });
})

describe('filterByType', () => {
  const muestra =[
    {
     "name":"Bulbasaur",
     "type": "Grass",
     "egg" :"2 km"
    },
    {
    "name":"Charizard",
    "type":"Fire",
    "egg":"Not in Eggs"
    },
    {
    "name":"Psyduck",
    "type":"Water",
    "egg":"5 km"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterByType, 'function');
  });

  

  it('debería retornar "Psyduck" al filtrar por tipo "Water"', () => {
    assert.deepEqual(window.filterByType(muestra,"Water"),[{"name":"Psyduck","type":"Water","egg":"5 km"}] );
  });
})

describe('filterByEgg', () => {
  const muestra =[
    {
     "name":"Bulbasaur",
     "type": "Grass",
     "egg" :"2 km"
    },
    {
    "name":"Charizard",
    "type":"Fire",
    "egg":"Not in Eggs"
    },
    {
    "name":"Psyduck",
    "type":"Water",
    "egg":"5 km"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterByEgg, 'function');
  });

  

  it('debería retornar "Charizard" al filtrar "Not in Eggs"', () => {
    assert.deepEqual(window.filterByEgg(muestra,"Not in Eggs"), [{"name":"Charizard","type":"Fire","egg":"Not in Eggs"}]);
  });
})