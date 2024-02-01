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

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email =  document.getElementById('email');
let phoneNum = document.getElementById('phoneNumber');
let company = document.getElementById('company');

let eventDate = document.getElementById('eventDate');
let eventTime = document.getElementById('eventTime');

let indoor = document.getElementById('indoor');
let outdoor = document.getElementById('outdoor');
let both = document.getElementById('both');

let flexible = document.getElementById('flexible');
let notFlexible = document.getElementById('notflexible');

let eventAddress = document.getElementById('eventAddress');
let eventApt = document.getElementById('eventApt');
let eventCity = document.getElementById('eventCity');
let eventState = document.getElementById('eventState');
let eventZip = document.getElementById('eventZip');

let eventColors = document.getElementById('eventColors');

let corporate = document.getElementById('Corporate');
let birthday = document.getElementById('Birthday');
let gradProm = document.getElementById('GradProm');
let babyShower = document.getElementById('BabyShower');
let genderRevel = document.getElementById('GenderRevel');
let eventTypeOther = document.getElementById('eventTypeOther');

let venueEntrance = document.getElementById('VenueEntrance');
let stage = document.getElementById('stage');
let frontDoor = document.getElementById('FrontDoor');
let frontYard = document.getElementById('FrontYard');
let backyard = document.getElementById('Backyard');
let staircase = document.getElementById('Staircase');
let ceiling = document.getElementById('ceiling');
let otherArea= document.getElementById('otherArea');
let otherAreaText = document.getElementById('otherAreaText');

let garlandArch = document.getElementById('garlandArch');
let ringGarland = document.getElementById('ringGarland');
let ballonWall = document.getElementById('ballonWall');
let ballonArch = document.getElementById('ballonArch');
let ballonColumn = document.getElementById('ballonColumn');
let ballonCenterpieces = document.getElementById('ballonCenterpieces');
let heliumBouquets = document.getElementById('heliumBouquets');
let otherDesign = document.getElementById('otherDesgin');
let otherDesignText = document.getElementById('otherDesignText');

let moreInfo = document.getElementById('moreInfo');

let howYouKnowUs = document.getElementById('howYouKnowUs');



quoteForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('submit clicked');

    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        //phoneNum: phoneNum.value,
        company: company.value,

        eventDate: eventDate.value,
        eventTime: eventTime.value,

        indoor: indoor.value,
        outdoor: outdoor.value,
        both: both.value,

        //flexible: flexible.value,
        //notFlexible: notFlexible.value,

        eventAddress: eventAddress.value,
        eventApt:  eventApt.value,
        eventCity: eventCity.value,
        eventState: eventState.value,
        eventZip: eventZip.value,

        eventColors: eventColors.value,

        corporate: corporate.value,
        birthday: birthday.value,
        gradProm: gradProm.value,
        babyShower: babyShower.value,
        genderRevel: genderRevel.value,
        eventTypeOther: eventTypeOther.value,

        venueEntrance: venueEntrance.value,
        stage: stage.value,
        frontDoor: frontDoor.value,
        frontYard: frontYard.value,
        backyard: backyard.value,
        staircase: staircase.value,
        ceiling: ceiling.value,
        otherArea: otherArea.value,
        otherAreaText: otherAreaText.value,

        garlandArch: garlandArch.value,
        ringGarland: ringGarland.value,
        ballonWall: ballonWall.value,
        ballonArch: ballonArch.value,
        ballonColumn: ballonColumn.value,
        ballonCenterpieces: ballonCenterpieces.value,
        heliumBouquets: heliumBouquets.value,
       // otherDesign: otherDesign.value,
        otherDesignText: otherDesignText.value,

        //moreInfo: moreInfo.value,

        howYouKnowUs: howYouKnowUs.value

    }

    console.log(formData);                 
});


