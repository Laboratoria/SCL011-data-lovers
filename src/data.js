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

  sortByDate: (takeData, selectSort)=>{
    let dates = [] ;
     for (let j = 0; j< takeData.length; j++) {
      //dates.push(new Date(takeData[j].date * 1000))
       if (selectSort==="recent"){
        dates.push(takeData[j])
        dates.sort(function(a,b){return b-a})
       }
      else if (selectSort==="older"){
        dates.reverse (dates.sort(function(a,b){return b-a}))
        dates.push(takeData[j])
       }
     }
     return dates
 }
}
