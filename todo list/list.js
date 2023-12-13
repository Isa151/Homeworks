
// let con = document.querySelector(".container")

// let listDiv = document.createElement("div");
// listDiv.classList.add("list");

// let listItemDiv = document.createElement("div");
// listItemDiv.classList.add("list_item");


// let taskNameDiv = document.createElement("div");
// taskNameDiv.classList.add("task_name");


// let heading = document.createElement("h2");
// heading.textContent = "Buy Model S";


// let paragraph = document.createElement("p");
// paragraph.textContent = "22:56";


// taskNameDiv.appendChild(heading);
// taskNameDiv.appendChild(paragraph);


// let img = document.createElement("img");
// img.setAttribute("src", "./icon/plus.png");
// img.setAttribute("alt", "");

// listItemDiv.appendChild(taskNameDiv);
// listItemDiv.appendChild(img);


// listDiv.appendChild(listItemDiv);


// con.appendChild(listDiv);



// let task = {
//     id: Math.random(),
//     task: document.getElementById('taskInput').value,
//     time: new Date().toLocaleTimeString('uz-UZ', { hour12: false }),
//     isDone: false
// };

// document.getElementById('showDetailsButton').onclick = function(event) {
//     event.preventDefault();
//     task.isDone = true;
//     console.log(task);
// };



let taskSubmit = document.querySelector('#showDetailsButton').onclick = function() {
   
    event.preventDefault();
    let taskInput = document.querySelector('#taskInput').value;
  
   
    if (taskInput !== "" && taskInput.toLowerCase() === "buy model x") {
      let con = document.querySelector(".container");
  
      let list = document.createElement("div");
      list.classList.add("list");
  
      let listItem = document.createElement("div");
      listItem.classList.add("list_item");
  
      let taskName = document.createElement("div");
      taskName.classList.add("task_name");
  
      let buy = document.createElement("h2");
      buy.textContent = "Buy Model X";
  
      let time = document.createElement("p");
      time.textContent = "22:56";
  
      taskName.appendChild(buy);
      taskName.appendChild(time);
  
      let img = document.createElement("img");
      img.setAttribute("src", "./icon/plus.png");
      img.setAttribute("alt", "");
  
      img.addEventListener('click', function() {
        list.remove()
      });
  
      listItem.appendChild(taskName);
      listItem.appendChild(img);
  
      list.appendChild(listItem);
  
      con.appendChild(list);
    } else {
        console.log("ERROR")
    }
  };


