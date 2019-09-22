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
  
  },

  curiositiesGenderFemale:(listOfCharacters)=>{
    const female = listOfCharacters.filter((e) => {
      return (e.gender === 'Female');
  
    })
      return female.length;

  },

  curiositiesGenderMale:(listOfCharacters)=>{
    const male = listOfCharacters.filter((e) => {
      return (e.gender === 'Male');
  
    })
      return male.length;

  },

  curiositiesGenderUnknown:(listOfCharacters)=>{
    const unknown = listOfCharacters.filter((e) => {
      return (e.gender === 'unknown');
  
    })
      return unknown.length;

  },

  curiositiesStatusAlive:(listOfCharacters)=>{
    const alive = listOfCharacters.filter((e) => {
      return (e.status === 'Alive');
  
    })
      return alive.length;

  },
  curiositiesStatusDead:(listOfCharacters)=>{
    const dead = listOfCharacters.filter((e) => {
      return (e.status === 'Dead');
  
    })
      return dead.length;

  },
  curiositiesStatusUnknown:(listOfCharacters)=>{
    const statusUnknown = listOfCharacters.filter((e) => {
      return (e.status === 'unknown');
  
    })
      return statusUnknown.length;

  },


  //para select
  
  earth:(listOfCharacters) =>{
    const earth = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Earth (Replacement Dimension)' );
    })
    return earth;
  },

  earthTwo:(listOfCharacters) =>{
    const earthTwo = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Earth (C-137)');
    })
    return earthTwo;
  },

  resortPlanet:(listOfCharacters) =>{
    const resortPlanet = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Resort Planet');
    })
    return resortPlanet;
  },
  purgePlanet:(listOfCharacters) =>{
    const purgePlanet = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Purge Planet');
    })
    return purgePlanet;
  },
  abadango:(listOfCharacters) =>{
    const abadango = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Abadango');
    })
    return abadango;
  },

  signusExpanse:(listOfCharacters) =>{
    const signusExpanse = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Signus 5 Expanse');
    })
    return signusExpanse;
  },

  postApocalyptic:(listOfCharacters) =>{
    const postApocalyptic = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Post-Apocalyptic Earth');
    })
    return postApocalyptic;
  },

  venzenulon:(listOfCharacters) =>{
    const venzenulon = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Venzenulon 7');
    })
    return venzenulon;
  },

  bepis:(listOfCharacters) =>{
    const bepis = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Bepis 9');
    })
    return bepis;
  },

  nuptia:(listOfCharacters) =>{
    const nuptia = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Nuptia 4');
    })
    return nuptia;
  },

  fantasyWorld:(listOfCharacters) =>{
    const fantasyWorld = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Fantasy World');
    })
    return fantasyWorld;
  },

  birdWorld:(listOfCharacters) =>{
    const birdWorld = listOfCharacters.filter((e) => {
      return (e.origin.name === 'Bird World');
    })
    return birdWorld;
  },

  unknownFilter:(listOfCharacters) =>{
    const unknownFilter = listOfCharacters.filter((e) => {
      return (e.origin.name === 'unknown');
    })
    return unknownFilter;
  },
};


