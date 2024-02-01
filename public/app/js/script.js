const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const scrollfaders = document.querySelectorAll('.textfade');
const iconscrollfaders = document.querySelectorAll('.icontextfade');
const textrights = document.querySelectorAll('.textright');

//let slides = document.getElementsByClassName("img--container");

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
let autoslideIndex = 0;
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName('img--container');
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    autoslideIndex++;
    if (autoslideIndex > slides.length){
        autoslideIndex = 1;
    }
    slides[autoslideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); //slides changes every 4 seconds
    }

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




//drag drop browse div

//drag drop


/*let dropZone;

dropZone = document.getElementById("drop-zone");
dropZone.addEventListener("dragenter", dragenter, false);
dropZone.addEventListener("dragover", dragover, false);
dropZone.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
} 

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  console.log(files);
}*/



////book.html///

//appearFlexablityOptions

const flexiblity = document.getElementById('flexibledate');

function appearFlexiblityOptions() {
  if (document.getElementById('indoor').checked) {
    flexiblity.style.display = 'block';
  } else {
    flexiblity.style.display = 'none';
    
    
  }
  
}

const locationRadioBtns = document.querySelectorAll('input[name="location"]');
locationRadioBtns.forEach(radio => {
  radio.addEventListener('click', appearFlexiblityOptions);
});


//click browse
function importData() {
    const dropZone = document.querySelector('#drop-zone');
    const filesvg = document.querySelector('.filesvg');
    const fileReset =document.querySelector('.file-reset-botton');
    const browse = document.querySelector('.file-select-botton');  

    let input =document.createElement('input');
    
    input.type= 'file';
    input.multiple="multiple";
    input.accept = "image/png, image/jpeg, image/jpg ";
    input.onchange = _ => {

        if (window.File && window.FileReader && window.FileList && window.Blob) {

        // you can use this method to get file and perform respective operations
                let files =   Array.from(input.files);
                console.log(files);

                const output = document.querySelector(".result");

                output.innerHTML = "";

                for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
                    if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
                    const picReader = new FileReader(); // RETRIEVE DATA URI
                    console.log(picReader);

                    picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
                        const picFile = event.target;
                        const div = document.createElement("div");
                        div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
                        output.appendChild(div);

                        fileReset.addEventListener('click', () => {  
                            input.value = ''; 
                            console.log(input.value);
                                        dropZone.classList.remove('active');
                                          filesvg.classList.remove('active');
                                          fileReset.classList.remove('active');
                                          browse.classList.remove('active'); 
                                          output.classList.remove('active');
                                          div.remove();
                          })
                      });

                    picReader.readAsDataURL(files[i]);

                    

                }
                if (files.length != 0){
                    dropZone.classList.add('active');
                      filesvg.classList.add('active');
                      fileReset.classList.add('active');
                      browse.classList.add('active');  
                      output.classList.add('active'); 
                }

            } else {
                alert("Your browser does not support File API");
              }
            };

      input.click();


      
}



///form validation///

const quoteForm = document.querySelector('.quote-form');

quoteForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submit clicked');
});



  







 

//input.addEventListener('change', function(){
//    file = this.files[0];
//});

//drag drop




/*let slideIndex = [1,1];
         viewSlides(1);
         function changeSlide(n) {
             
            viewSlides(slideIndex[0] += n);
            
         }
         function viewSlides(n) {
            let ele = document.getElementsByClassName("img--container");
            if (n > ele.length) {
               slideIndex[0] = 1
            }
            if (n < 1) {
               slideIndex[0] = ele.length
            }
            for (i = 0; i < ele.length; i++) {
               ele[i].style.display = "none";
            }
            ele[slideIndex[0]-1].style.display = "block";
            
         }*/

            


         //setTimeout("changeSlide()", 3000);
/*var i= 0;
var images =[];
var time= 3000;
images[0] = '/images/slide5.JPG';
images[1] = '/images/slide3.JPG';
images[2] = '/images/slide4.JPG';
images[3] = '/images/slide6.JPG';

function changeImg(){
    document.hasChildNodes.src = images[i];

    if (i <images.length-1){
        i++;

    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload =changeImg;
*/
/*

let slideIndex = 0;
showSlides();

for(i=0; i<slides.length; i++){
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length){
    slideIndex = 1;
}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); //slides changes every 2 seconds

*/