// Function to initialize Bootstrap components that require JavaScript
function initializeBootstrap() {
    // Initialize the carousel
    var carouselElement = document.getElementById('carouselExampleDark');
    var carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000 // Set the interval for the carousel (in milliseconds)
    });
  }
  
  // Function to handle form submission (e.g., newsletter signup)
  function handleFormSubmission() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get the email input value
      var emailInput = document.getElementById('f');
      var email = emailInput.value;
  
      // Perform validation or other actions as needed
      // For example, you can send the email to a backend server for processing
  
      // Clear the email input field after submission
      emailInput.value = '';
  
      // Optionally, display a confirmation message to the user
      alert('Thank you for signing up!');
    });
  }
  
  // Call the initialization function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initializeBootstrap();
    handleFormSubmission();
  });

  
  