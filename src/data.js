window.showAndOrder={
  orderABC:(a,b)=>{
    const listOfCharactersOrderABC = listOfCharacters.sort((a, b) => {
      return (a.name < b.name) ? -1 : 1
    })
    return listOfCharactersOrderABC
  }
  
}