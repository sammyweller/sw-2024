// Function to change shape of active menu icon
function toggleMenu() {
  var button = document.querySelector('.navbar-toggler');
  button.classList.toggle('active');
}


// Scroll to bottom of page: 
window.onload = function() {
    let toBottomBtn = document.getElementById("to-bottom-btn");
    toBottomBtn.addEventListener("click", function() {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    });
  };


//Function to change to dark mode
  function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

