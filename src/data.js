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

  sortByDate: (takeData) => {
    let dates = ""
    for (let i = 0; i < takeData.length; i++) {
      if(takeData[i]===takeData[i].date){
      date.push(takeData[i].date)

      }
      console.log(dates)
    }
    return dates
  }
};