const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const scrollfaders = document.querySelectorAll('.textfade');
const iconscrollfaders = document.querySelectorAll('.icontextfade');
const textrights = document.querySelectorAll('.textright');


//hamburger menu

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if( header.classList.contains('open')){  // close hamburger menu
        body.classList.remove('noscrolling');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    }
    else {
        header.classList.add('open'); // open hamburger menu
        body.classList.add('noscrolling');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });
        
        
    }
    

});

//slide show
let slides = document.getElementsByClassName("img--container");
let autoslideIndex = 1; // Initialize the slide index

// Show the first slide initially
showSlides(autoslideIndex);

function changeSlide(step) {
    showSlides(autoslideIndex += step);
}

function showSlides(n) {
    if (n > slides.length) { 
        autoslideIndex = 1; // Go to the first slide if the index is greater than the number of slides
    } 
    if (n < 1) { 
        autoslideIndex = slides.length; // Go to the last slide if the index is less than 1
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Display the current slide
    slides[autoslideIndex - 1].style.display = "block";  
}

// Set an interval for automatic slide change
setInterval(function(){ changeSlide(1); }, 3000); // Change slide every 3 seconds



//scroll animations//
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

scrollfaders.forEach(scrollfader => {
    appearOnScroll.observe(scrollfader);
});



//scroll animations//
const iconappearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

const iconappearOnScroll = new IntersectionObserver 
(function(
    entries,
    iconappearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            iconappearOnScroll.unobserve(entry.target);
        }
    });
},
iconappearOptions);

iconscrollfaders.forEach(iconscrollfader => {
    iconappearOnScroll.observe(iconscrollfader);
});

//scroll animations//
const textappearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
};

const textappearOnScroll = new IntersectionObserver 
(function(
    entries,
    textappearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            textappearOnScroll.unobserve(entry.target);
        }
    });
},
textappearOptions);

textrights.forEach(textright => {
    textappearOnScroll.observe(textright);
});