let ham = document.getElementById('hamburger');
let closeButton = document.getElementById("close-button");
let expend=document.getElementById('expend');
let expendul=document.getElementById('expul');
 


function toggleOpacity() {
    if (expend.style.opacity === 1) {
      expend.style.opacity = 0;
      ham.style.display = "block";
    } else {
      expend.style.opacity = 1;
    }
  }
  
  function toggleVisibility() {
    if (expend.style.visibility === "hidden") {
      expend.style.visibility = "visible";
      ham.style.display = "none";
      closeButton.style.display = "block";
    } else {
      expend.style.visibility = "hidden";
      closeButton.style.display = "none";
      ham.style.display = "block";
      
    }
  }
  
  ham.addEventListener("click", () => {
    toggleOpacity();
    toggleVisibility();
  });
  
  closeButton.addEventListener("click", () => {
    toggleOpacity();
    toggleVisibility();
  });