var slideIndex = 0;
var timer = 4000;
showSlides();

function currentSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var slideContent = document.getElementsByClassName("slide-content");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
       slides[i].className = slides[i].className.replace(" slider-animated", "");     
    }

    for (let i = 0; i < slideContent.length; i++) {
        slideContent[i].className.replace(" slide-content-animated", "");
        slideContent[i].style.display = "block";
    }

    slideIndex = n;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex === slides.length) { vid.play(); timer = 8000 }

    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    slides[slideIndex].className += " slider-animated"; 
    if (slideContent[slideIndex-1] === undefined || slideContent[slideIndex] === undefined) {
        
    } else {
        slideContent[slideIndex].className += " slide-content-animated"; 
        slideContent[slideIndex-1].style.display = "none"; 
    }

    timer = 8000;
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var slideContent = document.getElementsByClassName("slide-content");
    var dots = document.getElementsByClassName("dot");
    var vid = document.getElementById("myVideo");

    for (let i = 0; i < slideContent.length; i++) {
        slideContent[i].className.replace(" slide-content-animated", "");
        slideContent[i].style.display = "block";
    }

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       slides[i].className = slides[i].className.replace(" slider-animated", "");     
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    if (slideIndex === slides.length) { vid.play(); timer = 8000 }
    setTimeout(animateSlider, timer); 
    setTimeout(showSlides, timer * 2); 
    timer = 4000;
}

function animateSlider() {
    var slides = document.getElementsByClassName("slides");
    var slideContent = document.getElementsByClassName("slide-content");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length -1) {slideIndex = 0}   
    dots[slideIndex].className += " active"; 
    slides[slideIndex].className += " slider-animated"; 
    if (slideContent[slideIndex-1] === undefined || slideContent[slideIndex] === undefined) {
        
    } else {
        slideContent[slideIndex].className += " slide-content-animated"; 
        slideContent[slideIndex-1].style.display = "none"; 
    }
    
    slides[slideIndex].style.display = "block";
}

