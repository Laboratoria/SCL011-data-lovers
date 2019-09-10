window.filterData={
  filter: (takeData, buttonFilter)=>{
      let result= []; 
      for (let i=0; i<takeData.length;i++){
          if (buttonFilter === takeData[i].feedlabel){
              result.push(takeData[i])
          }
          if(buttonFilter === 'feedlabel'){
            result.push(takeData[i])
          }
      }
      return result
  }, 
  sortByDate: (takeData)=>{
      let dates = [] ;
       for (let j = 0; j< takeData.length; j++) {
           dates.push(new Date(parseInt(takeData[j].date) * 1000))
           dates.sort(function(a,b){return b-a})
          
           
       }
       return dates
   }
};