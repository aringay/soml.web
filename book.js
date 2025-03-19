// Function to toggle visibility of hidden details
function toggleDetails(sectionId) {
  const details = document.getElementById(sectionId);
  const isVisible = details.style.display === 'block';
  
  // Hide all sections first
  document.querySelectorAll('.hidden-details').forEach((el) => {
    el.style.display = 'none';
  });

  // Show or hide the clicked section
  details.style.display = isVisible ? 'none' : 'block';
}

// Function to show the contact form
function showContactForm() {
  document.getElementById("contact-form").style.display = "flex";
}

// Function to show the sign-in form
function showSignInForm() {
  document.getElementById("sign-in-form").style.display = "flex";
}

// Function to close the forms
function closeForm() {
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("sign-in-form").style.display = "none";
}