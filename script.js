// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons
  const buttons = document.querySelectorAll("button");

  // Loop through each button
  buttons.forEach(button => {
    // Add click event listener
    button.addEventListener("click", function () {
      // If the button is disabled, show no alert
      if (button.disabled) {
        console.log(button.id + " is disabled.");
        return;
      }

      // Show an alert when clicked
      alert("You clicked on " + button.textContent);

      // Log to console for debugging
      console.log("Button clicked: " + button.id);
    });
  });
});