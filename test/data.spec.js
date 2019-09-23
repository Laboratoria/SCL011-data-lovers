global.window = global;


global.assert = require("chai").assert;
require("../src/data/worldbank/worldbank.js");
require("../src/data.js");
require("./data.spec.js");

describe("window.worldBank", () => {
  it("debería ser un objeto", () => {
    assert.equal(typeof window.worldBank, "object");
  });
});

describe("window.worldBank.filterCountry", () => {
  const muestra = {
    PER: { indicators: "Array(139)" },
    MEX: { indicators: "Array(139)" }
  };

  it("debería ser una función", () => {
    assert.equal(typeof window.worldBank.filterCountry, "function");
  });
  
  
  it('debería retornar el objeto "PER"', () => {
    assert.deepEqual(
      window.worldBank.filterCountry(muestra, {

            PER: { indicators: "Array(139)" }
      })
    );
  });
});

  describe("window.worldBank.filter", () => {
    const muestra = [
      {
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        "indicatorCode": "SL.TLF.PART.FE.ZS"
        },
        
        {
        "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)", 
        "indicatorCode":"SL.TLF.INTM.MA.ZS"
        },
        
        {
        "indicatorName": "Personal de las fuerzas armadas (% del total de la fuerza laboral)",
        "indicatorCode": "MS.MIL.TOTL.TF.ZS"
        }
    ];

    it("debería ser una función", () => {
      assert.equal(typeof window.worldBank.filter, "function");
    });
  
    it('debería retornar la llave interCode que incluye ".FE"', () => {
      assert.deepEqual(
        window.worldBank.filter(muestra,"SL.TLF.PART.FE.ZS"), [{
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          "indicatorCode": "SL.TLF.PART.FE.ZS"
          }])
      })
  })

  
  describe("window.worldBank.sort", () => {

    const dataSort = {
      "1989": "",
      "1990": 33.1,
      "1998": 25.1,
      "2007": 18.2,
      "2008": 17.3,
      "2013": 14.2
    }
    
    
    
    it('debería ser una función', () => {
      assert.equal(typeof window.worldBank.sort, 'function');
    }),
    it('debería retornar un arreglo de datos ordenados de forma ascendente para sort(dataToSort, "ascendent")', () => {
      assert.equal(window.worldBank.sort(dataSort, `ascendent`),[
        ["1989", ""],
        ["2013", 14.2],
        ["2008", 17.3],
        ["2007", 18.2],
        ["1998", 25.1],
        ["1990", 33.1]
      ])
    })
    it('Debería retornar un arreglo de datos ordenados de forma descendente para: sort(dataToSort, "descendent")', () => {
      assert.equal(window.worldBank.sort(dataSort, `descendent`),[
        ["1990", 33.1],
        ["1998", 25.1],
        ["2007", 18.2],
        ["2008", 17.3],
        ["2013", 14.2],
        ["1989", ""],
      ])
    });
  })

