var slideIndex = 0;
var contentIndex = 0;
var timer = 4000;
showSlides();
moveContent();

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
        slideContent[i].className.replace("slide-content slide-content-animated", "slide-content");
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
    setTimeout(moveContent, timer)
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


function moveContent() {
    var moveDiv = document.getElementsByClassName('movediv');
    var slides = document.getElementsByClassName("slides");

    contentIndex++;
    if (contentIndex > moveDiv.length) {contentIndex = 0}    
    if (moveDiv[contentIndex-1] === undefined ) {
        
    } else {
        slides[contentIndex-1].onmousemove = function (e) {
            var x = e.pageX,
                y = e.pageY;

            for (let i = 0; i < moveDiv.length; i++) {
                moveDiv[i].style.transform = '';
            }

            if (moveDiv[contentIndex-1] === undefined ) {
            
            } else {
                moveDiv[contentIndex-1].style.transform = 'matrix(1, 0, 0, 1,'+ (-x/30) + ',' + (y/30) +')';
                moveDiv[contentIndex-1].style.transition = 'transform 2s';
            }
    }
    };
}
