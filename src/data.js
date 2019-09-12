window.worldBank = {
  //filtro país
  filterCountry: (data, buttonCountry) => {
    let countryName = [];
      for (let dataCountry in data) {
        if (buttonCountry === dataCountry) {
        countryName = (dataCountry, data[dataCountry].indicators)
        return countryName;
      }
    }
  },
  
  //filtra los objetos filtrados por el tema  
  filter: (data) => {
    let filteredIndicators = [];
    data.forEach(element => {
      if (element.indicatorCode.includes('.FE.')) {
        filteredIndicators.push(element);
      }
    });
   // console.log(filteredIndicators);
    return filteredIndicators;
 },

 sort: (data, sortOrder) => {
  let indicatorData = [];
  for (let i in data)
    indicatorData.push([i, data[i]]);
  if (sortOrder === 'ascendente') {
    indicatorData.sort((a, b) => {
      return a- b
    })
  } else if (sortOrder === 'descendente') {
    indicatorData.sort((a, b) => {
      return b - a
    })
  }
  return indicatorData[0];
  
},
/* meanOfValues: (justData) => {
  let sum = arrayOfValues.reduce((a, b) => {
    return a+b
  })
  let totalValues = arrayOfValues.length
  return sum/totalValues
}  */
}

