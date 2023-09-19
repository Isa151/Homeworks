
let question1 = prompt("Как вас зовут?")

if (question1.toLowerCase().startsWith('a')){
    let question2 = +prompt("Сколько вам лет?")
    if(question2 >= 20 && question2 <= 40){
          let question3 = +prompt("Сколько у вас денег?") 
          if(question3 >= 100){ 
              let question4 = +prompt("Сколько вас человек?")
              if (question4 <= 10){
                alert("Заходи")
              }else{
                alert("Нет места")
              }
          }else{
        alert("Иди работай")
          }
    }else{
        alert("Иди отдыхай")
    }
}else{
    alert('Иди домой')
}