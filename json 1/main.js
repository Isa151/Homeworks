  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
      reload(data, todoCon);
    });

  let todoCon = document.getElementById("todo_list");

  function reload(data, place) {
    place.innerHTML = ""; 

    let column1 = document.createElement("div");
    column1.classList.add("column");
    let column2 = document.createElement("div");
    column2.classList.add("column");

    data.forEach(item => {
      let block = document.createElement("div");
      block.classList.add("todo-block");

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.disabled = true; 
      checkbox.checked = item.completed;
      block.appendChild(checkbox);
      
      let text = document.createElement("span");
      text.textContent = item.title;
      block.appendChild(text);

      if (data.indexOf(item) < data.length / 2) {
        column1.appendChild(block);
      } else {
        column2.appendChild(block);
      }
    });

    place.appendChild(column1);
    place.appendChild(column2);
  }

