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
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const nombrex = () => {

  return ;
};

window.LOL = LOL;
