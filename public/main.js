// Feedback

$("#feedbackForm").on("submit", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/submit-feedback",
    data: $(this).serialize(),
    success: function (response) {
      // alert('Feedback submitted successfully!');
      const modal = new bootstrap.Modal(
        document.getElementById("feedbackModal")
      );
      modal.show();
      $("#feedbackForm")[0].reset();
    },
    error: function () {
      alert("An error occurred, please try again.");
    },
  });
});

// chatbot


  // Function to toggle the chatbot
document.getElementById("toggleChatbot").addEventListener("click", function() {
    const chatbot = document.getElementById("chatbot");
    chatbot.classList.toggle("open");
  });
  
  function handleOption(option) {
    const responseDiv = document.getElementById("response");
  
    // Clear previous responses
    responseDiv.innerHTML = '';
  
    // Handle each chatbot option
    switch (option) {
      case 'availability':
        responseDiv.innerHTML += '<p>Our products are usually available within 7-10 business days.</p>';
        break;
      case 'priority':
        responseDiv.innerHTML += '<p>You can change the priority of your order by contacting customer support.</p>';
        break;
      case 'delivery':
        responseDiv.innerHTML += '<p>The delivery charge depends on the location and type of product.</p>';
        break;
      default:
        responseDiv.innerHTML += '<p>Sorry, I did not understand that.</p>';
    }
  }
  

//feedback model
//     document.querySelector('form').addEventListener('submit', function (e) {
//   e.preventDefault(); // Prevent default form submission behavior
//   const modal = new bootstrap.Modal(document.getElementById('feedbackModal'));
//   modal.show();
// });
