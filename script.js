// Store and retrieve user preferences using localStorage
function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getUserPreference(key) {
    return localStorage.getItem(key);
  }
  
  // Example of saving a user preference
  saveUserPreference('buttonColor', '#e74c3c');
  
  // Apply retrieved preference to the button
  let color = getUserPreference('buttonColor');
  document.querySelector('button').style.backgroundColor = color;
  
  // Animation triggered by button click
  document.getElementById("animateBtn").addEventListener("click", function() {
    let element = document.getElementById("myElement");
    element.classList.add("animate");
  
    // Remove animation class after animation ends
    setTimeout(() => {
      element.classList.remove("animate");
    }, 3000); // Duration of animation (3 seconds)
  });
  