document.addEventListener("DOMContentLoaded", function() {
    var topicLinks = document.querySelectorAll('.project-topic a');
    var projectContent = document.querySelector('.project-content');
    var projectDetails = projectContent.querySelectorAll('section');
    var defaultDetail = projectContent.querySelector('#Nothing');
  
    function showTopicDetails(event) {
      event.preventDefault();
      var target = this.getAttribute('href').substring(1);
  
      // Hide all project details
      projectDetails.forEach(function(detail) {
        detail.style.display = 'none';
      });
  
      // Show the selected project detail
      var selectedDetail = projectContent.querySelector('#' + target);
      if (selectedDetail) {
        selectedDetail.style.display = 'block';
      }
    }
  
    topicLinks.forEach(function(link) {
      link.addEventListener('click', showTopicDetails);
    });
  
    // Hide all project details initially
    projectDetails.forEach(function(detail) {
      detail.style.display = 'none';
    });
  
    // Show the default detail on page load
    defaultDetail.style.display = 'block';
  });