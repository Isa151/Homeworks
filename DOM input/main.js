let form = document.forms.login;
let inps = document.getElementsByTagName('input');

form.onsubmit = (e) => { 
    e.preventDefault();
    let user = {};
    
    let fm = new FormData(form);
    
    let errors = [];

    fm.forEach((val, key) => {
        user[key] = val;
    });

    for(let i = 0; i < inps.length; i++){
        let input = inps[i];
        if(input.value.length === 0 && input.classList.contains('useless')){
            errors.push(input.name);
            input.classList.add('error');
        } else {
            input.classList.remove('error'); 
        }
    }

    if(errors.length > 0){
        alert('Error');
        console.log(errors);
    } else {
        console.log(user);
    }
};
