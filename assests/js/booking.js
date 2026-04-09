
//Checking office status
const currHours = new Date().getHours();
const officeStatus = document.querySelector("#office-status");

if (currHours >= 9 && currHours < 17) {
  officeStatus.innerHTML = "● We are currently OPEN";
  officeStatus.style.color = "#1a4d2e";
  officeStatus.style.backgroundColor = "#c0e2d3";
} else {
  officeStatus.innerHTML = "○ Office is CLOSED - We'll see you at 9 AM";
  officeStatus.style.color = "#842029";
  officeStatus.style.backgroundColor = "#f8d7da";
}

document.addEventListener("DOMContentLoaded", function () {


  const appointmentForm = document.querySelector("#appointmentForm");
  const successMsg = document.querySelector("#successMsg");

  console.log("Checking for form... Found:", !!appointmentForm);

  if (appointmentForm && successMsg) {
    appointmentForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      
      appointmentForm.classList.add("d-none");
      successMsg.classList.remove("d-none");

      console.log("Success! Form submitted.");
    });
  } 

  const officeStatus = document.querySelector("#office-status");
  const currHour = new Date().getHours();

  if (officeStatus) {
    if (currHour >= 9 && currHour < 17) {
      officeStatus.style.backgroundColor = "#c0e2d3";
    } else {
      officeStatus.style.backgroundColor = "#f8d7da";
    }
  }
});
