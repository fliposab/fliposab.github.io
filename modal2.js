// Open the Modal 
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
}

var slideindex2 = 1;
showSlides2(slideindex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideindex2 += n);
}
  
  // Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideindex2 = n);
}
  
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideindex2 = 1}
  if (n < 1) {slideindex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindex2-1].style.display = "block";
  captionText.innerHTML = dots[slideindex2-1].alt;
}