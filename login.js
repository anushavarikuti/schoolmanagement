
$(document).ready(function () {
    // Function to validate and process Employee login
    $("#login_button1").click(function () {
      var username = $(".login_form_container:eq(0) .input_text:eq(0)").val();
      var password = $(".login_form_container:eq(0) .input_text:eq(1)").val();
  
      // You can add your login validation logic here
      // For example, check if the username and password are correct
  
      // For demo purposes, let's assume a simple check
      if (username === "employee" && password === "password") {
        window.location.href = "log_employee.html";
        // Redirect to the employee dashboard or perform other actions
      } else {
        alert("Employee login failed. Please check your credentials.");
      }
    });
  
    // Function to validate and process Student login
    $("#login_button2").click(function () {
      var username = $(".login_form_container:eq(1) .input_text:eq(0)").val();
      var password = $(".login_form_container:eq(1) .input_text:eq(1)").val();
  
      // You can add your login validation logic here
      // For example, check if the username and password are correct
  
      // For demo purposes, let's assume a simple check
      if (username === "student" && password === "password") {

        window.location.href = "log_student.html";
        // Redirect to the student dashboard or perform other actions
      } else {
        alert("Student login failed. Please check your credentials.");
      }
    });
  });
  