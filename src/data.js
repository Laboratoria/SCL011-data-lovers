 const lolData= Object.values(LOL.data);

window.lolData= lolData;
 const container= document.getElementById("root");
const mostPower= (data, getAttack)=>{
  let powered=[];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["info"][getAttack] ==10) {
      powered.push(data[i]);
    }
    const li = document.createElement(li);
    let textLi = document.createTextNode(data[i]);
    li.appendChild(textLi);
    container.appendChild(li);
  }
  return powered;
}

//console.log(mostPower((lolData(info)), "attack"))

//return dataLol;

//window.example = example;

