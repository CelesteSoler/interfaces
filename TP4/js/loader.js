"use strict"

document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading
    simulateContentLoading();
  });
  
  function simulateContentLoading() {
    let percentageElement = document.getElementById("percentage");
    let loaderInner = document.getElementById("loader-inner");
  
    let percent = 0;
    let interval = setInterval(function () {
      percent += 1; // Increase the percentage as needed
      percentageElement.innerText = `${percent}%`;
      // loaderInner.style.transform = `rotate(${percent * 3.6}deg)`; // Adjust rotation
  
      if (percent >= 100) {
        clearInterval(interval);
        // Hide loader and display content
        document.getElementById("loader-container").style.display = "none";
        // Your code to display the actual content
      }
    }, 50);
  }
  