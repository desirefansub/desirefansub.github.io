

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*    [ Keano  ( 2022.02.04 ) ]    */

const Selector = (q) => document.querySelectorAll(q);
const Creator = (...t) => t.map((e) => document.createElement(e));

function EffectEvent(e) {
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;
  e.target.style.setProperty("--x", `${x}px`);
  e.target.style.setProperty("--y", `${y}px`);
}

Selector("button").forEach((btn) => {
  btn.addEventListener("mousemove", EffectEvent);
  btn.addEventListener("mousedown", EffectEvent);
});
