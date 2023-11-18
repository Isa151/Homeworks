

let batteryView = document.querySelector("#battery")

let speedView = document.querySelector("#speed")

let plus = document.querySelectorAll("#speedup")

let minus = document.querySelectorAll("#speedown")

let curr_but = 750

let curr_speed = 60

plus.forEach(btn => {
    btn.onclick = () => {
        if (curr_speed <= 80) {
            curr_speed += 5
            curr_but -= 10

        }
        batteryView.innerHTML = `${curr_but} km`
        speedView.innerHTML = `${curr_speed} km/h`
    }
    minus.forEach(btn => {
        btn.onclick = () => {
            if (curr_speed >= 5) {
                curr_speed -= 5;
                curr_but += 10;
                batteryView.innerHTML = `${curr_but} км`;
                speedView.innerHTML = `${curr_speed} км/ч`;
            }
        }
    })

});


let curr_temp = 20;

function updateTemperature() {
    let tempElement = document.querySelector('#temperature');
    tempElement.innerText = curr_temp + " °C";
}

function increaseTemperature() {
    if (curr_temp < 40) {
        curr_temp += 5;
        updateTemperature();
    }
}

function decreaseTemperature() {
    if (curr_temp > -10) {
        curr_temp -= 5;
        updateTemperature();
    }
}

let increaseButton = document.querySelector('#warm  ');
let decreaseButton = document.querySelector('#cold');

increaseButton.addEventListener('click', increaseTemperature);
decreaseButton.addEventListener('click', decreaseTemperature);



// let black = document.querySelector("#black")
// let white = document.querySelector("#white")
// let milk = document.querySelector("#milk")

// let img = document.querySelector('.modal_img')


// black.onclick = () => {
//     img.style.backgroundImage = 'url(img\tesla1.png)'
// }
// white.onclick = () => {
//     img.style.backgroundImage = 'url(img\tesla3.png)'
// }
// milk.onclick = () => {
//     img.style.backgroundImage = 'url(img\tesla2.png)'
// }


// // let modal = document.querySelector(".modal")

// // let link = document.querySelector(".modal_deal")

// // let close = document.querySelector(".close")

// // link.onclick = () => {
// //     modal_bg.style.display = "flex"s
// // }

// // close.onclick = () => {
// //     modal_bg.style.display = "none"
// }


function toggleModal() {
    var modal = document.getElementById("myModal");
    var switchToggle = document.querySelector(".toggle input[type='checkbox']");
    if (switchToggle) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}