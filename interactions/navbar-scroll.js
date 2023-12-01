// !!THIS DOES NOT WORK YET!!
// keep track of previous scroll position
let prevScrollPos = window.pageYOffset;

window.document.addEventListener("scroll", function() {
// current scroll position
const currentScrollPos = window.pageYOffset;

if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.getElementById("navbar").style.display = "initial";
} else {
    // user has scrolled down
    document.getElementById("navbar").style.display = "none";
}

// update previous scroll position
prevScrollPos = currentScrollPos;
});