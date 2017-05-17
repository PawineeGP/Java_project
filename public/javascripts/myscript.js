$(document).ready(function(){
  if (true) {
    $(".Mmodel-1").click(function(){
      $(".model").fadeIn();

    });
  }

});

$(document).ready(function(){
  $(".closer").click(function(){
    $(".model").fadeOut();

  });
});

//////
$(document).ready(function(){

    $(".Mmodel-2").click(function(){
      $(".model-2").fadeIn();

    });
});
$(document).ready(function(){
  $(".closer").click(function(){
    $(".model-2").fadeOut();

  });
});

/////
$(document).ready(function(){

    $(".Mmodel-3").click(function(){
      $(".model-3").fadeIn();

    });
});
$(document).ready(function(){
  $(".closer").click(function(){
    $(".model-3").fadeOut();

  });
});

//*** script photo////
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
