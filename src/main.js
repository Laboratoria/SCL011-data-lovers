


fetch('https://raw.githubusercontent.com/NataliaSaavedraM/SCL011-data-lovers/master/src/data/worldbank/worldbank.json')
.then(response=>{
  return response.json()})
  .then(data=>{
  
   const buttonCountry = document.getElementsByClassName("botones");
   let filteredCountry = []; 
//evento click en los botones pais para filtrar el pais que se selecciona
for (let i = 0; i < buttonCountry.length; i++) {
  buttonCountry[i].addEventListener("click", () => {
    document.getElementById("datos").style.display = "block";
    document.getElementById("banner").style.display = "none";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("article").style.display = "none";
    document.getElementById("instituciones").style.display = "none";

    let countrySelected = document.getElementById("countrySelected");
    let countryValue = buttonCountry[i].value;
    if (countryValue === "BRA") {
      countrySelected.innerHTML = " Brasil";
    } else if (countryValue === "PER") {
      countrySelected.innerHTML = " Perú";
    } else if (countryValue === "MEX") {
      countrySelected.innerHTML = " México";
    } else if (countryValue === "CHL") {
      countrySelected.innerHTML = " Chile";
    }
    filteredCountry = window.worldBank.filterCountry(data, countryValue);
    return filteredCountry;
  });
}

const indicator = document.getElementById("indicator");
//Ponemos valor inicial en el select
indicator.insertAdjacentHTML(
  "beforeend",
  '<option value="">Selecciona un indicador</option>'
);
//función que imprime nombres de los indicadores en el select
const print = (indicatorName, indicatorCode) => {
  const result = `<option value = "${indicatorCode}" > ${indicatorName} </option>`;
  indicator.insertAdjacentHTML("beforeend", result);
};



let filteredIndicators = [];
const elements = document.getElementsByClassName("botones");
//evento click para mostrar las opciones del select
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", () => {
    indicator.innerHTML = "";
    let valElement = elements[i].value; // event.target.value
    filteredIndicators = window.worldBank.filter(filteredCountry, valElement);
    filteredIndicators.forEach(element => {
      let indicatorName = element.indicatorName;
      let indicatorCode = element.indicatorCode;
      print(indicatorName, indicatorCode);
    });
  });
}

let year = [];
let roundedData = [];
let datos = [];
const table = document.getElementById("indicator-table");
let yearOfData = [];
let justData = [];
const chart = document.getElementById("chart").getContext("2d");
//función para imprimir datos de variable en el html
indicator.addEventListener("change", () => {
  document.getElementById("tableBox").style.display = "block";
  document.getElementById("indicator-name").innerHTML = "";
  table.innerHTML = "";

  let indicatorSelect = indicator.value;
  filteredIndicators.forEach(element => {
    if (element.indicatorCode === indicatorSelect) {
      let indicatorName = element.indicatorName;
      year = element.data;

      for (let data in year) {
        if (year[data] !== "") {
          datos = parseFloat(year[data]);
          roundedData = datos.toFixed(2);
          //console.log(year)
        } else {
          roundedData = year[data];
        }
        if (roundedData !== "") {
          document.getElementById("indicator-name").innerHTML =
            indicatorName + ":";
          const row = table.insertRow(0);
          const cellYear = row.insertCell(0);
          const cellData = row.insertCell(1);
          cellYear.insertAdjacentHTML("beforeend", `<tr><td>${data}</td></tr>`);
          cellData.insertAdjacentHTML(
            "beforeend",
            `<tr><td>${roundedData}<td></tr>`
          );
        }
      }

      //extrayendo los valores de años
      yearOfData = Object.keys(year);
      //extrayendo los valores de datos
      justData = Object.values(year);

      document.getElementById("volver").style.display = "block";
    }
  });

  getMyChartPlease(yearOfData, justData, chart);
  return year;
});

//función de gráfica normal
const getMyChartPlease = (yearOfData, justData, chart) => {
  //Pintando la gráfica
  let lineChartData = new window.Chart(chart, {
    type: "line",
    data: {
      labels: yearOfData,
      datasets: [
        {
          label: "Datos del indicador entre 1960 a 2017",
          backgroundColor: "rgba(184, 161, 29, 0.246)",
          borderColor: "rgba(21, 102, 105 )",
          data: justData
        }
      ]
    }
  });
  return lineChartData;
};

let dataOrder = [];
//let yearOfData = [];
//let justData = [];
let yearOfDataOrdered = [];
let justDataOrdered = [];
//pintar data ordenada que está guardada en indicatorData
const printSorted = dataOrder => {
  table.innerHTML = "";
  dataOrder.forEach(element => {
    if (element[1] !== "") {
      let orderedData = Number(element[1]);
      // console.log(orderedData)
      const row = table.insertRow(0);
      const cellYear = row.insertCell(0);
      const cellData = row.insertCell(1);
      justDataOrdered = orderedData.toFixed(1);
      cellYear.insertAdjacentHTML(
        "afterbegin",
        `<tr><td>${element[0]}</td></tr>`
      );
      cellData.insertAdjacentHTML(
        "afterbegin",
        `<tr><td>${justDataOrdered}<td></tr>`
      );
    }
  });
  return yearOfDataOrdered, justDataOrdered;
  // console.log(yearOfDataOrdered, justDataOrdered)
};

const orderOption = document.getElementById("type-of-order");
//evento de la opción a ordenar
orderOption.addEventListener("change", () => {
  //if(roundedData!==""){
  dataOrder = window.worldBank.sort(year, orderOption.value);
  printSorted(dataOrder);
  //}
});

const volver = document.getElementById("volver");
volver.addEventListener("click", () => {
  document.getElementById("datos").style.display = "none";
  document.getElementById("banner").style.display = "block";
  document.getElementById("inicio").style.display = "block";
  document.getElementById("article").style.display = "block";
  document.getElementById("instituciones").style.display = "block";
});





})
