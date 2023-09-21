
let array = [
    { name: "islom" },
    { name: "baxtzod" },
    { name: "safir" }
  ];
  
  
  let question = prompt("Введите индекс для удаления?");
  

  question = parseInt( question);
  if (!isNaN( question) &&  question >= 0 &&  question < array.length) {
    array.splice( question, 1);
    console.log("Успешно");
  } else {
    console.log("Такого человека нет");
  }
  
  console.log(array);