document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded!✅"); //debug
  
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"));

      // Add 'active' to the clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      projects.forEach((project) => {
        const category = project.getAttribute("data-category");
        if (category === filter) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }

      });
    });
  });

//   if (filterButtons.length > 0) {
//     filterButtons[0].classList.add("active");
//     filterButtons[0].click();
//   }
// });
