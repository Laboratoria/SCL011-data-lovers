global.window = global;
global.assert = require('chai').assert;
//require('../src/data/rickandmorty.js')
require('../src/data');
require('./data.spec.js');


describe('filterMale', () => {
  
  const muestra = [
    {
      "name" : "Rick Sanchez",
      "gender" : "Male"
    },
    {
       "name": "Morty Smith",
       "gender": "Male"
    },

    {
       "name": "Morty Smith",
       "gender": "Male"
    },

   {
     "name": "Summer Smith",
     "gender": "Female"
    },
   {
     "name": "Beth Smith",
     "gender": "Female"
     }

  ]

  it('debería ser una función', () => {
    assert.equal('filterMale', 'function');
  });

  it('debería retornar el genero del personaje', () => {
    assert.deepEqual(window.filter.filterMale(muestra, "Male"), [{"name": "Rick Sanchez", "gender": "Male"}])
  });
})
