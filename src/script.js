
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("navbar").style.top = "0";
    // } else {
    // document.getElementById("navbar").style.top = "-50px";
    // }
    let nav = document.querySelector('nav')
    if (window.scrollY >= 100 ) {
      
      nav.classList.add('nav-bg-color-black')
	} if (window.scrollY === 0) {
    nav.classList.remove('nav-bg-color-black')
  }
}