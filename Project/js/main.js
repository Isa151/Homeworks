

let modal = document.querySelector(".modal")

let open = document.querySelectorAll("[data-modal]")

let close = document.querySelectorAll("[data-close]")
 
 
 open.forEach(btn => {
    btn.onclick = () => {
       modal.classList.add('show', 'fade')
     }
 });
  

 close.forEach(btn => {
    btn.onclick = () => {  
        modal.classList.remove('show')
    }
 })


let  tabs = document.querySelectorAll('.tabcontent')

let tabs_btn = document.querySelectorAll('.tabheader_item')


function changeContent(n) {   
   tabs.forEach(el => el.classList.add('hide', 'fade'))
   tabs[n].classList.remove('hide')
}

let prev = 0

tabs_btn.forEach((btn, idx) => {
   btn.onclick = () =>{
      tabs_btn[prev].classList.remove('tabheader_item_active')
      btn.classList.add('tabheader_item_active')
      changeContent(idx)
      prev = idx
   }  
}
)

changeContent(0)

let slides = document.querySelectorAll('.offer__slide')
let prev_btn = document.querySelector(".offer__slider-prev")
let next_btn = document.querySelector(".offer__slider-next")
let current = document.querySelector('#current')
let total = document.querySelector('#total')

let slide_index = 0

slideShow(slide_index)

function slideShow(n) {

    if (n === slides.length) {
        slide_index = 0
    }

    if (n < 0) {
        slide_index = slides.length - 1
    }

    current.innerHTML = slide_index + 1 < 10 ? `0${slide_index + 1}` : slide_index + 1
    total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length

    slides.forEach(el => el.classList.add('hide'))
    slides[slide_index].classList.remove('hide')
}

next_btn.onclick = () => {
    slide_index++
    slideShow(slide_index)
}

prev_btn.onclick = () => {
    slide_index--
    slideShow(slide_index)
}





let form = document.querySelector('.order__form'); 
let inputs = document.querySelectorAll('.order__input'); // 

form.onsubmit = function() {
  inputs.forEach(input => {
    console.log(input.value); 
  });
  return false; 
};