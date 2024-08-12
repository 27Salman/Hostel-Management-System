document.getElementById("update-btn").addEventListener("click", updateMealDetails);

function updateMealDetails() {
  // Get the meal details from the user (e.g., using prompt or input fields)
  var mondayBreakfast = prompt("Enter Monday's Breakfast:");
  var mondayLunch = prompt("Enter Monday's Lunch:");
  var mondaySnack = prompt("Enter Monday's Snack:");
  var mondayDinner = prompt("Enter Monday's Dinner:");

  // Update the table cells with the new meal details
  document.getElementById("monday-breakfast").textContent = mondayBreakfast;
  document.getElementById("monday-lunch").textContent = mondayLunch;
  document.getElementById("monday-snack").textContent = mondaySnack;
  document.getElementById("monday-dinner").textContent = mondayDinner;
  
  // Repeat the above steps for other days of the week
  // ...
}
