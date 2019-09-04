const lolData= Object.values(LOL.data);

window.lolData= lolData;

const mostPower= (data, getAttack)=>{
  let powered=[];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["info"][getAttack] ==10) {
      powered.push(data[i]);
    }
  }
  return powered;
}

//console.log(mostPower((lolData(info)), "attack"))

//return dataLol;

//window.example = example;

