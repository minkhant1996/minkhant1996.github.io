document.addEventListener("DOMContentLoaded", function() {
    var educationItems = document.querySelectorAll(".education-item");
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");
    var currentIndex = 0;
  
    function showCurrentItem() {
      for (var i = 0; i < educationItems.length; i++) {
        educationItems[i].style.display = "none";
      }
      educationItems[currentIndex].style.display = "block";
    }
  
    function nextItem() {
      if (currentIndex < educationItems.length - 1) {
        currentIndex++;
        showCurrentItem();
      }
      // Disable next button if no more items
      if (currentIndex === educationItems.length - 1) {
        nextButton.disabled = true;
      }
      // Enable prev button when moving to next item
      prevButton.disabled = false;
    }
  
    function prevItem() {
      if (currentIndex > 0) {
        currentIndex--;
        showCurrentItem();
      }
      // Disable prev button if at first item
      if (currentIndex === 0) {
        prevButton.disabled = true;
      }
      // Enable next button when moving to prev item
      nextButton.disabled = false;
    }
  
    nextButton.addEventListener("click", nextItem);
    prevButton.addEventListener("click", prevItem);
  
    showCurrentItem();
  });
