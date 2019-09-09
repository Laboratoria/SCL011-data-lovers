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
      return {result}
  }
};