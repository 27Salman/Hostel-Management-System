// Sample data from the database
var records = [
    { id: 1, name: "John Doe", room: "101" },
    { id: 2, name: "Jane Smith", room: "102" },
    { id: 3, name: "Alice Johnson", room: "103" }
  ];
  
  // Function to populate the table with records
  function populateTable() {
    var tableBody = document.querySelector("#recordsTable tbody");
  
    records.forEach(function(record) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.id}</td>
        <td>${record.name}</td>
        <td>${record.room}</td>
        <td>
          <button onclick="viewDetails(${record.id})">View Details</button>
          <button onclick="printDetails(${record.id})">Print</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to display record details in a modal
  function viewDetails(id) {
    var record = records.find(function(record) {
      return record.id === id;
    });
  
    var modal = document.getElementById("recordModal");
    var modalContent = document.getElementById("recordDetails");
  
    modal.style.display = "block";
    modalContent.innerHTML = `
      <h3>Student ID: ${record.id}</h3>
      <p>Name: ${record.name}</p>
      <p>Room Number: ${record.room}</p>
      <!-- Add additional details here -->
    `;
  }
  
  // Function to print record details
  function printDetails(id) {
    // Logic to print details goes here
    console.log("Printing record with ID: " + id);
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("recordModal");
    modal.style.display = "none";
  }
  
  // Close modal when the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("recordModal");
    if (event.target == modal) {
      closeModal();
    }
  };
  
  // Populate the table when the page loads
  populateTable();
  