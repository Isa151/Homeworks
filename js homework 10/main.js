

let name = 'Alex'
let money = 10000
let account = 7777

let question1 = prompt('Как вас зовут?')



if (question1 === name || question1 === 'alex') {
    let question2 = +prompt('Номер счета?')
    if (question2 === account) {
        let question3 = +prompt('Сколько обналичить?')
        if (question3 <= money) {
            alert(`Снял- ${question3} \n Осталось- ${money - question3}`)
        }else {
            alert('Не достаточно средств')
        }
    }else {
        alert('Пользователь не найден')
    }
}else {
    alert('Пользователь не найден')
}





