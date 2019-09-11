global.window = global;
global.assert = require('chai').assert;
require('../src/data/rickandmorty.js')
require('../src/data.js');
require('./data.spec.js');


describe('filterGender', () => {
  
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
    assert.equal('filterGender', 'function');
  });

  it('debería retornar el genero del personaje', () => {
    assert.deepEqual(window.filterGender(muestra, "Male"), [{"name": "Morty Smith", "gender": "Male"}])
  });
})
