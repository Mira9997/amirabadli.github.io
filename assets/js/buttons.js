document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded!");

  const filterButtons = document.querySelectorAll(".filter-button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Function to filter items
  function filterItems(filter) {
    portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Set the first button as active and apply its filter on load
  if (filterButtons.length > 0) {
    const defaultFilter = filterButtons[0].getAttribute("data-filter");
    filterButtons[0].classList.add("active");
    filterItems(defaultFilter);
  }

  // Add click event to each button
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"));

      // Add 'active' class to clicked button
      btn.classList.add("active");

      // Get selected filter and apply
      const selectedFilter = btn.getAttribute("data-filter");
      filterItems(selectedFilter);
    });
  });
});
