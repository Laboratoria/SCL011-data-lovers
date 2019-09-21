global.window = global;
global.assert = require('chai').assert;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');

describe('filterTags()', () =>{

  const tipos =[
    {
      name:"Kalista",
      tags: "Marksman",
      partype: "BloodWell"
    },
    {
      name:"Vayne",
      tags: "Assassin",
      partype: "MP"
    },
    {
      name:"Warwick",
      tags:"Tank",
      partype: "MP"
    }
  ]
  it('debería ser una función', () => {
    assert.equal(typeof filterTags, 'function');
  });

  it('debería retornar "Warwick"cuando se filtra type "Tank" ', () => {
    assert.deepEqual(window.filterTags(tipos,"Tank") ,[
      {name:"Warwick",
    tags:"Tank",
    partype: "MP"
  }]);
  });
})

describe('mostPower()', () => {
  
  const poderosos = [
    {
      name: "Ahri",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 5
      },
       },
       {
      name: "Fiora",
      info:{
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 3
      },
    },
    {
      name: "Rammus",
      info: {
        attack: 4,
        defense: 10,
        magic: 5,
        difficulty: 5
      },
      }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof mostPower, 'function');
  });

  it('debería retornar "Fiora" al pulsar botón "más poderosos"', () => {
    assert.deepEqual(window.mostPower(poderosos,["info"],"10"), [
      {name: "Fiora",
      info:{
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 3
      },
    }
    ]);
  });
})



describe('sortAZ()', ()=>{

  const order= [
    {
      name:"Karma",
      tags:"Mage",
      partype:"MP"
    },
    {
      name:"Draven",
      tags:"Marksman",
      partype:""
    },
    {
      name:"Urgot",
      tags:"Fighter",
      partype:"Energy"
    }
  ]

  it('deberia ser una función', () =>{
    assert.equal(typeof sortAZ, 'function');
  });

  it('deberia retornar nombres de personajes ordenados de la a a la z',() => {
    assert.deepEqual(window.sortAZ(order, "az"),[
      {
        name:"Draven",
        tags:"Marksman",
        partypes:""
      },
      {
        name:"Karma",
        tags:"Mage",
        partype:"MP"
      },
      {
        name:"Urgot",
        tags:"Fighter",
        partype:"Energy"
      }

    ])
  })
})