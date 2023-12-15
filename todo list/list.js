
  let form = document.forms.login;
  let cont = document.querySelector(".container");
  let todos = [];
  let modal = document.getElementById('modal')
  let closeModal = document.querySelector(".close")
  
  let changeButton = document.querySelector(".changeTask")

  form.onsubmit = (e) => {
    e.preventDefault();
    let fm = new FormData(form);
    
    let todo = {
      id: Math.random(),
      title: fm.get("task"),
      isDone: false,
      time: new Date().toLocaleTimeString("uz-UZ", {hour12: false})
    };
    
    if(todo.title.trim() === ""){
      alert("Введите задачу");
      return;
    }

    todos.push(todo);
    reload(todos, cont);
    form.reset();
  };

  function reload(arr, place) {
    place.innerHTML = "";

    for(let item of arr) {
      let todo = document.createElement('div');
      let top_div = document.createElement("div");
      let title = document.createElement("h1");
      let removeBtn = document.createElement("button");
      let time = document.createElement("span");

      todo.classList.add("todo");
      top_div.classList.add("top");
      title.classList.add("title");
      title.innerHTML = item.title;

      removeBtn.innerHTML = "x";
      time.innerHTML = item.time;

      top_div.append(title, removeBtn);
      todo.append(top_div, time);
      place.append(todo);
      todo.ondblclick= () => {
      modal.style.display = 'block';
      }
       closeModal.onclick =   () => {
        modal.style.display = 'none';
      };


      changeButton.onclick = () => {
        let inputElement = document.querySelector('.newTask');
        item.title = inputElement.value;
        title.innerHTML = inputElement.value;
        
      };
      
      
      removeBtn.onclick = () => {
        let isSure = confirm("Вы уверены?");

        if(isSure){
          let idx = arr.indexOf(item);
          todos.splice(idx, 1);
          todo.remove();
        }

  
      };
    }
  }


    