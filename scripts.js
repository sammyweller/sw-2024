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







 document.addEventListener('DOMContentLoaded', () => {
  const projectContainers = document.querySelectorAll('.project-container');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function updateSwipebox(index) {
      projectContainers.forEach((container, idx) => {
          container.classList.remove('active');
          container.style.display = idx === index ? 'flex' : 'none';
      });
      projectContainers[index].classList.add('active');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  }

  document.querySelector('.prev').addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSwipebox(currentIndex);
      }
  });

  document.querySelector('.next').addEventListener('click', () => {
      if (currentIndex < projectContainers.length - 1) {
          currentIndex++;
          updateSwipebox(currentIndex);
      }
  });

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateSwipebox(currentIndex);
      });
  });

  // Initialize the first project as active
  updateSwipebox(currentIndex);
});
