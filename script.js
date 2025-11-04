// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Button 1 - Primary
  document.getElementById("button-1").addEventListener("click", function () {
    alert("Primary Button Clicked!");
  });

  // Button 2 - Outline Secondary
  document.getElementById("button-2").addEventListener("click", function () {
    alert("Outline Secondary Button Clicked!");
  });

  // Button 3 - Success Large
  document.getElementById("button-3").addEventListener("click", function () {
    alert("Success Large Button Clicked!");
  });

  // Button 4 - Danger Small
  document.getElementById("button-4").addEventListener("click", function () {
    alert("Danger Small Button Clicked!");
  });

  // Button 5 - Warning Full Width
  document.getElementById("button-5").addEventListener("click", function () {
    alert("Warning Full-Width Button Clicked!");
  });

  // Button 6 - Disabled Info
  const button6 = document.getElementById("button-6");
  button6.addEventListener("click", function () {
    alert("This button is disabled and cannot be clicked!");
  });

  // Button 7 - Light
  document.getElementById("button-7").addEventListener("click", function () {
    alert("Light Button Clicked!");
  });

  // Button 8 - Link
  document.getElementById("button-8").addEventListener("click", function () {
    alert("Link Button Clicked!");
  });
});