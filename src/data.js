window.filterData={
  
  filter: (takeData, buttonFilters)=>{
      let result= []; 
      for (let i=0; i<takeData.length;i++){
          if (buttonFilters === takeData[i].feedlabel){
              result.push(takeData[i])
          }
          if(buttonFilters === 'feedlabel'){
            result.push(takeData[i])
          }
      }
    return result
  }, 
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
  statistics: (filteredData, takeData, buttonFilters)=>{
    filteredData = window.filterData.filter(takeData, buttonFilters);
    let statisticsEquation= filteredData.length*100/takeData.length
    return statisticsEquation;
   }
};
