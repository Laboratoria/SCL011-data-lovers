
/* Manejo del DOM */
const wbData = window.WORLDBANK;
let filteredCountry = [];
const buttonCountry = document.getElementsByClassName('botones');
let filteredIndicators = [];



//evento click en los botones pais para filtrar el pais que se selecciona
for (let i = 0; i < buttonCountry.length; i++) {
  buttonCountry[i].addEventListener('click', () => {
  //  sectionType.style.display = 'block';
    let countryValue = buttonCountry[i].value;
    if (countryValue === 'BRA') {
    //  countrySelected.innerHTML = 'País: Brasil'
    } else if (countryValue === 'PER') {
    //  countrySelected.innerHTML = 'País: Perú'
    } else if (countryValue === 'MEX') {
  //  countrySelected.innerHTML = 'País: México'
    } else if (countryValue === 'CHL') {
  //   countrySelected.innerHTML = 'País: Chile'
    }
    filteredCountry = window.worldBank.filterCountry(wbData, countryValue);
    return filteredCountry;
  
  })
}

const indicator = document.getElementById('indicator');
 //Ponemos valore inicial en el select
indicator.insertAdjacentHTML("beforeend", '<option value="">Selecciona un indicador</option>');
//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`
  indicator.insertAdjacentHTML('beforeend', result);
}
const elements = document.getElementsByClassName('elements')
//evento click para mostrar las opciones del select
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    indicator.innerHTML = '';
    let valElement = elements[i].value; // event.target.value
    filteredIndicators = window.worldBank.filter(filteredCountry, valElement);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    })
  })
}

let year = [];
let yearOfData = [];
let justData = [];
let roundedData = [];
let datos = [];
let chart;
const table = document.getElementById('indicator-table');

//función para imprimir datos de variable en el html
indicator.addEventListener("change", () => {
 
  document.getElementById('indicator-name').innerHTML = '';
  table.innerHTML = '';
  let indicatorSelect = indicator.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorSelect) {
      let indicatorName = element.indicatorName;
      year = element.data;
      for (let data in year) {
        if (year[data] !== '') {
          datos = parseFloat(year[data]);
          roundedData = datos.toFixed(2)
        } else {
          roundedData = year[data]
        }
        document.getElementById('indicator-name').innerHTML = indicatorName + ':';
        const row = table.insertRow(0);
        const cellYear = row.insertCell(0);
        const cellData = row.insertCell(1);
        cellYear.insertAdjacentHTML('beforeend', `<tr><td>${data}</td></tr>`);
        cellData.insertAdjacentHTML('beforeend', `<tr><td>${roundedData}<td></tr>`);
      }
      //extrayendo los valores de años
      yearOfData = Object.keys(year);
      //extrayendo los valores de datos
      justData = Object.values(year);
    }
  })
  getMyChartPlease(yearOfData, justData, chart);
  return year
})
//función de gráfica normal
const getMyChartPlease = (yearOfData, justData, chart) => {
  //Pintando la gráfica
  let lineChartData = new window.Chart(chart, {
    type: 'line',
    data: {
      labels: yearOfData,
      datasets: [{
        label: 'Datos del indicador',
        backgroundColor: 'rgb(217, 195, 230)',
        borderColor: 'rgb(98, 73, 112)',
        data: justData,
      }]
    }
  })
  return lineChartData;
}
 

//funcion para la minima en grafico
//funcion para la maxima en grafico
//funcion para promedio en grafico 