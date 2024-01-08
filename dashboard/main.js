function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let title = document.getElementById('taskTitle').value;
  let description = document.getElementById('taskDescription').value;
  let date = document.getElementById('taskDate').value;
  let time = document.getElementById('taskTime').value;
  let status = document.getElementById('taskStatus').value;

  let tableBody = document.querySelector('#taskTable tbody');
  let rowCount = tableBody.rows.length + 1;
  let newRow = tableBody.insertRow();
  newRow.innerHTML = '<td>' + title + '</td><td>' + description + '</td><td>' + date + '</td><td>' + time + '</td><td>' + status + '</td>';


  document.getElementById('taskForm').reset();
  
  newRow.onclick = () => {
    let changeModal = document.getElementById("modal_sec")
    changeModal.style.display = "flex"    
}
    let deleteBtn = document.getElementById("delete")
    deleteBtn.onclick = () => {
      newRow.remove(0)
      document.getElementById('modal_sec').style.display = 'none';
    } 

closeModal();



});
function saveModalData() {
  
  let input1Value = document.getElementById('input1').value;
  let input2Value = document.getElementById('input2').value;
  let dateValue = document.getElementById('input3').value;
  let timeValue = document.getElementById('input4').value;
  let statusValue = document.getElementById('taskStatus').value;


  let selectedRow = document.querySelector('#taskTable tbody tr.selected');
  if (selectedRow) {
    
    selectedRow.cells[0].textContent = input1Value;
    selectedRow.cells[1].textContent = input2Value;
    selectedRow.cells[2].textContent = dateValue;
    selectedRow.cells[3].textContent = timeValue;
    selectedRow.cells[4].textContent = statusValue;
  }
  function attachRowClickEvent() {
    
    let tableRows = document.querySelectorAll('#taskTable tbody tr');
    tableRows.forEach(row => {
      row.addEventListener('click', function() {
      
        tableRows.forEach(row => {
          row.classList.remove('selected');
        });
         
        this.classList.add('selected');
      });
    });
  }
  
    attachRowClickEvent();
  

  closeSecondModal();
}


function closeSecondModal() {
  document.getElementById('modal_sec').style.display = 'none';
}


// document.getElementById('plits').addEventListener('click', function() {
//   const table = document.getElementById('taskTable');
//   const tbody = table.querySelector('tbody');
//   const taskTiles = document.getElementById('taskTiles');
//   let plitsColor = document.getElementById("plits")
//   let tableColor = document.getElementById("chart")
  
//   plitsColor.style.color = "#007FFF"
//   tableColor.style.color = "#979797"

    
  
//   function convertToTiles() {
//     taskTiles.innerHTML = '';
//     Array.from(tbody.rows).forEach(row => {
//      tile = document.createElement('div');
//       tile.classList.add('task-tile');
//       tile.innerHTML = `
//         <div><strong>Заголовок задачи:</strong> ${row.cells[0].textContent}</div>
//         <div><strong>Описание задачи:</strong> ${row.cells[1].textContent}</div>
//         <div><strong>Дата:</strong> ${row.cells[2].textContent}</div>
//         <div><strong>Время:</strong> ${row.cells[3].textContent}</div>
//         <div><strong>Статус:</strong> ${row.cells[4].textContent}</div>
//       `;
//       taskTiles.appendChild(tile);
//     });
//     table.style.display = 'none';
//   }

//   convertToTiles();
// });




