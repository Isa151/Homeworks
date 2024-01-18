
let form = document.forms.login
let cont = document.querySelector(".container")
let todos = []


fetch("http://localhost:9000/todos")
    .then(res => res.json())
    .then(res => reload(res, cont))
    





form.onsubmit = (e) => { 
e.preventDefault(); 

let fm = new FormData(form)

let todo = {    
        title: fm.get('task'),  
}

if (todo.title.trim() === "") {
    alert('Error')
    return
}


 
// axios.post('http://localhost:9000/todos/', todo, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error( error);
//     });





fetch('http://localhost:9000/todos/', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
})
  

todos.push(todo)
reload(todos, cont)
}

function reload(arr, place) {

place.innerHTML = ''

for (let item of arr) {

    let todo = document.createElement('div')
    let top_div = document.createElement('div')
    let title = document.createElement('span')
    let remove_btn = document.createElement('button')
  
    
    todo.classList.add('todo')
    top_div.classList.add('up')
    title.classList.add('title')
     remove_btn.classList.add('remove')
    title.innerHTML = item.title
    remove_btn.innerHTML = "x"
    

    
    top_div.append(remove_btn)
    todo.append(top_div,title)
    place.append(todo)

    
    remove_btn.onclick = () => {
             

        // axios.delete(url + "/" + item.id)
    // .then(res => {
    //     console.log( res.data);
    // })
    // .catch(error => {
    //     console.error(error);
    // });  


         fetch('http://localhost:9000/todos/' + item.id, {
            method: "delete"
        }).then(res => res.json())
        .then(res => console.log(res))
            
          

        let isSure = confirm("Sure?")

        if (isSure) {
            let idx = arr.indexOf(item)
            todos.splice(idx, 1)
            todo.remove()
        }
    }

    todo.ondblclick = () => {
        let newTitle = prompt('Change title')


//         axios.put('http://localhost:9000/todos/' + item.id, { title: newTitle }, {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error( error);
//     });

        fetch('http://localhost:9000/todos/' + item.id, {
            method: "put",
            body: JSON.stringify({title: newTitle}),
            

            headers: { 
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res))

        if (newTitle.length > 0) {
            item.title = newTitle
            title.innerHTML = newTitle
        }
    }
  
}
}





       






















    
