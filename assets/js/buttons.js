<script>
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".portfolio-item");

    // Hide all portfolio items on page load
        projects.forEach((project) => {
        project.style.display = "none";
    });

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove 'active' class from all buttons
        filterButtons.forEach((b) => b.classList.remove("active"));

        // Add 'active' to clicked button
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        projects.forEach((project) => {
          const category = project.getAttribute("data-category");

          if (filter === "all" || category === filter) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
</script>
