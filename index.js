document.getElementById('doctorForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Get values from the form
    const name = document.getElementById('name').value;
    const doctorID = document.getElementById('doctorID').value;
    const specialization = document.getElementById('specialization').value;
    const experience = parseInt(document.getElementById('experience').value);
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
  
    // Determine the role based on experience
    let role;
    if (experience > 5) {
      role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      role = 'Junior';
    } else {
      role = 'Trainee';
    }
  
    // Create a new table row
    const newRow = document.createElement('tr');
  
    // Create eight table cells (columns)
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
  
    const doctorIDCell = document.createElement('td');
    doctorIDCell.textContent = doctorID;
  
    const specializationCell = document.createElement('td');
    specializationCell.textContent = specialization;
  
    const experienceCell = document.createElement('td');
    experienceCell.textContent = experience;
  
    const emailCell = document.createElement('td');
    emailCell.textContent = email;
  
    const mobileNumberCell = document.createElement('td');
    mobileNumberCell.textContent = mobileNumber;
  
    const roleCell = document.createElement('td');
    roleCell.textContent = role;
  
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
      deleteRow(newRow);
    });
    deleteCell.appendChild(deleteButton);
  
    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(doctorIDCell);
    newRow.appendChild(specializationCell);
    newRow.appendChild(experienceCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(mobileNumberCell);
    newRow.appendChild(roleCell);
    newRow.appendChild(deleteCell);
  
    // Append the row to the table
    document.getElementById('doctorList').appendChild(newRow);
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('doctorID').value = '';
    document.getElementById('specialization').value = 'Dermatologist';
    document.getElementById('experience').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobileNumber').value = '';
  });
  
  function deleteRow(row) {
    row.parentNode.removeChild(row);
  }
  