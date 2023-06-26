var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}

function toggleLeftMenu() {
  var leftSidebar = document.querySelector('.left-sidebar');
  leftSidebar.classList.toggle('active');
}

function toggleRightMenu() {
  var rightSidebar = document.querySelector('.right-sidebar');
  rightSidebar.classList.toggle('active');
}

function closeLeft() {
  var leftSidebar = document.querySelector('.left-sidebar');
  leftSidebar.classList.toggle('active');
}

function closeRight() {
  var rightSidebar = document.querySelector('.right-sidebar');
  rightSidebar.classList.toggle('active');
}