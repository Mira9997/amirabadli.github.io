document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JavaScript loaded!");

  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      projects.forEach((project) => {
        const category = project.getAttribute("data-category");
        project.style.display = (filter === "all" || category === filter) ? "block" : "none";
      });
    });
  });
});
