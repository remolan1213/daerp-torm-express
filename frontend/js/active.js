// Select all menu items
const menuItems = document.querySelectorAll(".menu-item");

// Function to toggle active class
function toggleActiveClass() {
  // Remove 'active' class from all menu items
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked item
  this.classList.add("active");
}

// Add event listeners to all menu items
menuItems.forEach((item) => {
  item.addEventListener("click", toggleActiveClass);
});
