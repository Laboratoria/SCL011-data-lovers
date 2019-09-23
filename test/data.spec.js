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
      "2011": 24.7999992370605,
      "2012": 25.0400009155273,
      "2014": 24.2099990844727,
      "2015": 21.6800003051758,
      "2017": 23.7600002288818
      }
    
        
    it('debería ser una función', () => {
      assert.equal(typeof window.worldBank.sort, 'function');
    }),
    it('debería retornar un arreglo de datos ordenados de forma ascendente para sort(dataSort, "ascendent")', () => {
      assert.equal(window.worldBank.sort(dataSort, "ascendent"),[
        ["2012", 25.0400009155273],
        ["2011", 24.7999992370605],
        ["2014", 24.2099990844727],
        ["2017", 23.7600002288818],
        ["2015", 21.6800003051758]
      ])
    })
    it('Debería retornar un arreglo de datos ordenados de forma descendente para: sort(dataSort, "descendent")', () => {
      assert.equal(window.worldBank.sort(dataSort, "descendent"),[
        ["2015", 21.6800003051758],
        ["2017", 23.7600002288818],
        ["2014", 24.2099990844727],
        ["2011", 24.7999992370605],
        ["2012", 25.0400009155273]

      ])
    });
  })
