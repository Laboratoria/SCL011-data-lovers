window.worldBank = {
  //filtro país
  filterCountry: (data, buttonCountry) => {
    let countryName = [];
    for (let dataCountry in data) {
      if (buttonCountry === dataCountry) {
        countryName = (dataCountry, data[dataCountry].indicators);
        return countryName;
      }
    }
  },

  //filtra los objetos filtrados por el tema
  filter: data => {
    let filteredIndicators = [];
    data.forEach(element => {
      if (element.indicatorCode.includes(".FE.")) {
        filteredIndicators.push(element);
      }
    });
    // console.log(filteredIndicators);
    return filteredIndicators;
  },

  sort: (data, sortOrder) => {
    let indicatorData = [];
    for (let i in data) indicatorData.push([i, data[i]]);
    if (sortOrder === "ascendent") {
      indicatorData.sort((a, b) => {
        return a[1] - b[1];
      });
    } else if (sortOrder === "descendent") {
      indicatorData.sort((a, b) => {
        return b[1] - a[1];
      });
    }
    return indicatorData;
    
  },
  
 /*  meanOfValues: (arrayOfValues) => {
    let sum = arrayOfValues.reduce((a, b) => {
      return a+=b
    })
    return sum/arrayOfValues.length
  } 
 */
 
/*
 meanOfValues: (data) => {
    arrayIndicatorsData=[];
    data.forEach(element=>{
      if(element.indicators.data.reduce(a,b)){
        return b += a;
      }return b /b.length;
    }
    )}
  ,
  MaxValue: (arrayOfValues) => {
    let maxValues = Math.max.apply(null, arrayOfValues => {
      return maxValues;
    });
  },
  MinValue: (arrayOfValues) => {
    let minValues = Math.min.apply(null, arrayOfValues => {
      return minValues;
    });
  }*/
};
