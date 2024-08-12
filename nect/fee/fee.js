// Example student data
const students = [
  {
    id: "ST123",
    name: "John Doe",
    phoneNumber: "1234567890",
    roomNumber: "A101",
    feeReceipt: "receipt1.pdf",
    status: ""
  },
  {
    id: "ST456",
    name: "Jane Smith",
    phoneNumber: "9876543210",
    roomNumber: "B202",
    feeReceipt: "receipt2.pdf",
    status: ""
  },
  // Add more students here
];

// Open receipt in a pop-up box
function openReceiptPopup(receiptUrl) {
  // Create a modal container element
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  // Create the modal content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create the close button
  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    closeModal();
  });

  // Create the receipt iframe
  const receiptIframe = document.createElement("iframe");
  receiptIframe.src = receiptUrl;

  // Append the elements
  modalContent.appendChild(closeButton);
  modalContent.appendChild(receiptIframe);
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  // Close the modal when clicked outside
  modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      closeModal();
    }
  });

  // Function to close the modal
  function closeModal() {
    modalContainer.remove();
  }
}

// Populate the student table
function populateStudentTable() {
  const tableBody = document.querySelector("#studentTable tbody");

  students.forEach(student => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const idCell = document.createElement("td");
    idCell.textContent = student.id;
    row.appendChild(idCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = student.phoneNumber;
    row.appendChild(phoneCell);

    const roomCell = document.createElement("td");
    roomCell.textContent = student.roomNumber;
    row.appendChild(roomCell);

    const receiptCell = document.createElement("td");
    const receiptLink = document.createElement("a");
    receiptLink.textContent = "View Receipt";
    receiptLink.href = "#"; // Set the href to '#' for the click event
    receiptLink.addEventListener("click", () => {
      openReceiptPopup(student.feeReceipt);
    });
    receiptCell.appendChild(receiptLink);
    row.appendChild(receiptCell);

    const statusCell = document.createElement("td");
    const verifiedCheckbox = document.createElement("input");
    verifiedCheckbox.type = "checkbox";
    verifiedCheckbox.addEventListener("change", () => {
      student.status = verifiedCheckbox.checked ? "verified" : "";
    });
    const declinedCheckbox = document.createElement("input");
    declinedCheckbox.type = "checkbox";
    declinedCheckbox.addEventListener("change", () => {
      student.status = declinedCheckbox.checked ? "declined" : "";
    });

    statusCell.appendChild(verifiedCheckbox);
    statusCell.appendChild(document.createTextNode("Verified"));
    statusCell.appendChild(document.createElement("br"));
    statusCell.appendChild(declinedCheckbox);
    statusCell.appendChild(document.createTextNode("Declined"));
    row.appendChild(statusCell);

    tableBody.appendChild(row);
  });
}

// Initialize the student table
window.addEventListener("load", () => {
  populateStudentTable();
});
