document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".service-card");

  allCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "all 0.3s ease";
      card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
   
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });
  });

 
  window.hour = new Date().getHours();
  window.year = new Date().getFullYear();

  window.greeting = "";
    if (window.hour < 12) window.greeting = "Good morning!!";
    else if (window.hour < 18) window.greeting = "Good afternoon!!!";
    else window.greeting = "Good evening!!!";
  document.querySelector('#hero-title').innerHTML = greeting;

  const copyRightYear = document.querySelector("#copyright");
  if (copyRightYear) {
    copyRightYear.innerHTML = `© ${window.year} All Rights Reserved`;
  }
  
});
