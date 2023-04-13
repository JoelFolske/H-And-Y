// Add an event listener to close the dropdown when the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  }
});

// Add an event listener to show the dropdown when the user clicks the button
var dropdown = document.querySelector(".dropdown");
var dropdownContent = dropdown.querySelector(".dropdown-content");
dropdown.querySelector(".dropbtn").addEventListener("click", function () {
  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
  } else {
    dropdownContent.classList.add("show");
  }
});
