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
    "name": "P-Coat Rick",
    "gender": "unknown"
    
    },
  
   {
     "name": "Beth Smith",
     "gender": "Female"
    }

  ];

  it('debería ser una función', () => {
    assert.equal(typeof window.filter.filterMale, 'function');
  });

  it('debería retornar el genero del personaje', () => {
    assert.deepEqual(window.filter.filterMale(muestra, "Male"), [{"name": "Rick Sanchez", "gender": "Male"}])
  });

  it('debería ser una función', () => {
    assert.equal(typeof window.filter.filterFemale, 'function');
  });

  it('debería retornar el genero del personaje', () => {
    assert.deepEqual(window.filter.filterFemale(muestra, "Female"), [{"name": "Beth Smith" , "gender": "Female"}])
  });

 
  it('debería ser una función', () => {
    assert.equal(typeof window.filter.filterUnknown, 'function');
  });

  it('debería retornar el genero del personaje', () => {
    assert.deepEqual(window.filter.filterUnknown(muestra, "unknown"), [{"name": "P-Coat Rick" , "gender": "unknown"}])
  });


  
})

