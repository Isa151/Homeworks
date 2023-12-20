

//   function openModal() {
//     document.getElementById('modal').style.display = 'block';
//   }
  
//   function closeModal() {
//     document.getElementById('modal').style.display = 'none';
//   }
  
//   function saveChanges() {
//     var newName = document.getElementById('editName').value;
//     var newAge = document.getElementById('editAge').value;
    
   
    
//     closeModal();
//   }

function openEditModal(btn) {
    let row = btn.parentNode.parentNode;
    let name = row.cells[1].innerHTML;
    let year = row.cells[2].innerHTML;
    document.getElementById('editModal').style.display = "block";
  }
  
  let close = document.querySelector(".close")
  close.onclick = () =>{
        document.getElementById('editModal').style.display = "none";
  }
  

  
  function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  } 

  
  document.addEventListener('DOMContentLoaded', function() {
    let add = document.querySelector('.show');
    add.addEventListener('click', function(event) {
      event.preventDefault();
      let nameInput = document.querySelector('.from input');
      let ageInput = document.querySelector('.to input');
      
      let name = nameInput.value;
      let age = parseInt(ageInput.value);
      let birthYear = 2023 - age;
      
      if (name && age) {     
        if (!document.querySelector('table')) {
          let table = document.createElement('table');
          table.innerHTML = '<thead><tr><th>№</th><th>Имя студента</th><th>Год рождения студента</th><th>Действия</th></tr></thead><tbody></tbody>';
          document.body.appendChild(table);
        }
        
    
        let tableBody = document.querySelector('table tbody');
        let  rowCount = tableBody.rows.length + 1;
        let  newRow = tableBody.insertRow();
        newRow.innerHTML = '<td>' + rowCount + '</td><td>' + name + '</td><td>' + birthYear + '</td><td><button onclick="openEditModal(this)">Редактировать</button><button onclick="deleteRow(this)">Удалить</button></td>';
        
        nameInput.value = '';
        ageInput.value = '';
      } else {
        alert('Заполните все поля');
      }
    });
  });


