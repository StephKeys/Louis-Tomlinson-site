$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


var containerPopup = document.getElementsByClassName("container-popup")[0];
var popup = document.getElementsByClassName("popup")[0];

var open = document.getElementsByClassName("info")[0];
var close = document.getElementsByClassName("fechar")[0];

open.onclick = function() {
  containerPopup.style.display = "block";
}

close.onclick = function() {
  containerPopup.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == containerPopup) {
    containerPopup.style.display = "none";
  }
}