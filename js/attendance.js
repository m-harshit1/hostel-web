document.addEventListener("DOMContentLoaded", function() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    const table = document.getElementById("attendance-table");
    const tableHead = table.createTHead();
    const headerRow = tableHead.insertRow();
    const monthHeader = document.createElement("th");
    monthHeader.textContent = "Month";
    headerRow.appendChild(monthHeader);
  
    for (let day = 1; day <= 31; day++) {
      const dayHeader = document.createElement("th");
      dayHeader.textContent = day;
      headerRow.appendChild(dayHeader);
    }
  
    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
  
    fetch('db/attendance.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((monthData, index) => {
          const monthRow = document.createElement("tr");
          const monthCell = document.createElement("td");
          monthCell.textContent = months[index];
          monthRow.appendChild(monthCell);
  
          monthData.forEach(day => {
            const dayCell = document.createElement("td");
            dayCell.textContent = day;
            monthRow.appendChild(dayCell);
          });
  
          tableBody.appendChild(monthRow);
        });
      })
      .catch(error => {
        console.error('Error loading attendance data:', error);
      });
  });
  