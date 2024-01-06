function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
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
  
  closeModal();
});


