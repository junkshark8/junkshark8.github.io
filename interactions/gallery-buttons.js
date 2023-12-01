const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

const gallery = document.getElementById("gallery-horizontal-scroll");

buttonRight.onclick = function () {
  gallery.scrollLeft += 400;
  console.log(scrollLeft);
};
buttonLeft.onclick = function () {
  gallery.scrollLeft -= 400;
  console.log(scrollLeft);
};