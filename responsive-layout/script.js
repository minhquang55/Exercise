var slideIndex = 1 ; 
show(slideIndex);
function plus(n){
    slideIndex = slideIndex + n;
    show(slideIndex); 
}
function show(n) {
    var i;
    var x = document.getElementsByClassName("myslide");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}