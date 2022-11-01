let slideIndex = 1;
showSlides(slideIndex);
//use let to declare variable slideindex and set to one then showslides function uses the slide index to tell where it is

function plusSlides(n) {
  showSlides(slideIndex += n);
}
//plusslides function uses the showslides and slide index to increase the slide index number

function currentSlide(n) {
  showSlides(slideIndex = n);
}
//current slide uses the showslides function to show what slide you are on by looking at the slide shown by the slideindex

function showSlides(n) {
    //create function showslides and create 3 variables i, slides, and dots
    // i is empty for now, slides is equal to the value found at mySlides, and dots the value at dot in our html
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

    //we now have to if statements one to say if the slide we are on goes past 3 then set it to first slide to loop our slides

  if (n > slides.length) {slideIndex = 1}    
  //another if statement to ensure that if we are on any slide but the first our index is set to the length of the slide
  if (n < 1) {slideIndex = slides.length}
  //now a for statement that for as long as i is equal to 0, less than the slides length , add one count to it
  for (i = 0; i < slides.length; i++) {
    //as long as we are displaying one slide the others dont show
    slides[i].style.display = "none";  
  }
  //for as long as i is equal to 0, i is less than the dot length then add a count to it
  for (i = 0; i < dots.length; i++) {
    //just ensuring the index number for our dots keeps track of the active one
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  //block the styles while using the index number to block the non active slides
  dots[slideIndex-1].className += " active";
  // keep track of the current slides that are active
}