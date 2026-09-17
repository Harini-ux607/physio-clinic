const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {


event.preventDefault();

const name = document.getElementById("name").value;
const successMessage = document.getElementById("successMessage");

successMessage.textContent =
    "Appointment booked successfully, " + name + "!";

successMessage.style.color = "#0077b6";

appointmentForm.reset();

});
