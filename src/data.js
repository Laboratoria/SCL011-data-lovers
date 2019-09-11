window.data={
  filterStatusAlive:(listOfCharacters)=>{
    
    const alive = listOfCharacters.filter((e) => {
      return (e.status === 'Alive');
    })
    return alive;
    
  },
  
  filterStatusDead:(listOfCharacters)=>{
    
    const dead = listOfCharacters.filter((e) => {
      return (e.status === 'Dead');
    })
    return dead;
  },
  
  filterStatusUnknown:(listOfCharacters)=>{
    
    const unknown = listOfCharacters.filter((e) => {
        return (e.status === 'unknown');
    })
      return unknown;
  },

  filterGenderFemale:(listOfCharacters) =>{
    const female = listOfCharacters.filter((e) => {
      return (e.gender === 'Female');
  
    })
      return female;
  },

  filterGenderMale:(listOfCharacters) =>{
    const male = listOfCharacters.filter((e) => {
      return (e.gender === 'Male');
    })
    return male;
  },

  filterGenderUnknown:(listOfCharacters)=>{
    const genderUnknown = listOfCharacters.filter((e) => {
      return (e.gender === 'unknown');
    })
    return genderUnknown;
  },

  orderABC:(listOfCharacters)=>{
      const orderABC = listOfCharacters.sort((a, b) => {
        return (a.name < b.name) ? -1 : 1
    })
    return orderABC;

  },
  
  orderCBA:(listOfCharacters)=>{
    const orderCBA = listOfCharacters.sort((a,b) => {
      return (b.name < a.name) ? -1 : 1
    })
    return orderCBA;
  
  }
  
};
