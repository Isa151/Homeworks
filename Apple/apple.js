
let storageBtns = document.querySelectorAll('.storage_item');

storageBtns.forEach(btn => {
    btn.onclick = () => {
        storageBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
    }
});


let iphoneImage = document.getElementById('iphone_src');
let colorButtons = document.querySelectorAll('.color');

colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedColor = button.getAttribute('data-color');
        iphoneImage.src = `./img/${selectedColor}-iphone.jfif`; 
    });
});