//Testimonial
function switchTestimonial(element, id) {
  const allTabs = document.querySelectorAll(".testimonial-tab");

  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("active");
  }

  element.classList.add("active");

  var allcontents = document.querySelectorAll(".testimonial-content");

  for (var j = 0; j < allcontents.length; j++) {
    allcontents[j].classList.remove("active");
  }

  document.getElementById(id).classList.add("active");
}

//tax calculation


const incomeInput = document.querySelector("#incomeInput");
const taxDisplay = document.querySelector("#taxDisplay");
if (incomeInput) {
  
  incomeInput.addEventListener("input", function () {
    let income = incomeInput.value;

    if (income > 0) {
      let result = 0.2 * income;

      taxDisplay.innerHTML = "$" + result.toLocaleString();
    } else {
      taxDisplay.innerHTML = "$0";
    }
  });
}