fetch('./data/lol/lol.json')
  .then( response => response.json())
  .then(data1 => {
    const lolData = (data1.data);
    console.log(lolData);

const container = document.getElementById("root");

container.innerHTML =
      ` <h3 id="name">${lolData[index].name} </h3>`;




  


});

