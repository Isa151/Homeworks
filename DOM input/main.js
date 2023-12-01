
let form = document.forms.login
let inps = document.querySelectorAll('input')
let success_p = document.querySelector("#success")
let error_p = document.querySelector('#counter')

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    age: /^(?:[1-9][0-9]?|100|0)$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    q1 : /^[a-zA-Z]+$/,
    q2 : /^[a-zA-Z]+$/,
    q3 :/^[a-zA-Z]+$/,
    info: /^[a-zA-Z]+$/
}

inps.forEach(inp => {
    let parent = inp.parentElement
    let span_error = inp.nextElementSibling

    inp.onkeyup = () => {
        if (patterns[inp.name]) {
            parent.classList.remove('error-field')
            span_error.innerHTML = ""
        } else {
            parent.classList.add('error-field')
            span_error.innerHTML = `Invalid data entered`
        }
    }
})




form.onsubmit = (e) => {
    e.preventDefault();

    let error_counter = 0
    let success_counter = 0

    inps.forEach(inp => {

        let parent = inp.parentElement
        let span_error = document.querySelectorAll("error_text")

        if (inp.value.length === 0 && parent.classList.contains('item') || parent.classList.contains('error-field')) {
            parent.classList.add('error-field')
            span_error.innerHTML = `Need to fill ${inp.name} field!`
            error_counter++
        } else {
            parent.classList.remove('error-field')
            span_error.innerHTML = "";
            error_counter
            success_counter++
        }
    })


    error_p.innerHTML = ` Error:${error_counter}/12`
    success_p.innerHTML = ` Success:${success_counter}/12`
    if (error_counter > 0) {
        alert('Error')
    } else {
        submit()
    }
}

function submit() {
    let fm = new FormData(form)

    let user = {
        email: fm.get('email'),
        password: fm.get('password')
    }

    fm.forEach((val, key) => {
        user[key] = val
    })

    console.log(user);
    form.reset()
}