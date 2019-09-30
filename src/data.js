window.filterData={
  // Función para filtrar según Pagina de Origen
  filter: (takeData, buttonFilters)=>{
      let result= []; 
      for (let i=0; i<takeData.length;i++){
        // aquí le decimos que separare cada valor del atributo feedlabel
          if (buttonFilters === takeData[i].feedlabel){
              result.push(takeData[i])
          }
          // aquí le decimos que muestre todas las noticias
          if(buttonFilters === 'feedlabel'){
            result.push(takeData[i])
          }
      }
    return result
  }, 
  // Función para ordenar las noticias por su Fecha
  sortByDate: (array, selectSort)=>{
    return array.sort(function(a,b){
      if (selectSort ==="recent"){
        return new Date(b.date) - new Date(a.date)
        
      }
      else {
        return new Date(a.date) - new Date(b.date)
      }
    });
  },
  // Función para la estadistica
  statistics: (filteredData, takeData, buttonFilters)=>{
    filteredData = window.filterData.filter(takeData, buttonFilters);
    let statisticsEquation= filteredData.length*100/takeData.length
    return statisticsEquation;
   }
};
