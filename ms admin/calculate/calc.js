function calculateTotal() {
  // Get selected month and year
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  // Calculate total amount
  var table = document.getElementById("data-table");
  var rows = table.getElementsByTagName("tr");
  var totalAmount = 0;
  for (var i = 1; i < rows.length; i++) { // Start from 1 to skip table header row
    var rate = parseFloat(rows[i].querySelector(".rate").value);
    var amount = parseFloat(rows[i].querySelector(".amount").value);
    totalAmount += rate * amount;
  }

  // Calculate total amount for other items
  var otherTable = document.getElementById("other-table");
  var otherRows = otherTable.getElementsByTagName("tr");
  for (var j = 1; j < otherRows.length; j++) { // Start from 1 to skip table header row
    var value = parseFloat(otherRows[j].querySelector(".value").value);
    totalAmount += value;
  }

  // Display calculated total amount
  var totalAmountElement = document.getElementById("total-amount");
  totalAmountElement.textContent = "Total Amount: " + totalAmount.toFixed(2);

  // Display month and year
  var monthYearElement = document.getElementById("month-year");
  monthYearElement.textContent = "Month: " + month + " " + year;
}
