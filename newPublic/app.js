//console.log($);
//console.log('hi');

//Global Variables for project
//slide carousel variables
let slideCon = $('.slide_container');
let slideTrack = $('#slide_track');

let card = {};

//search variables
let userInput = $('#search');
let searchBtn = $('#submit');

//Search Criteria
let startSearch;

//CRUD Buttons
let deleteBtn = $('#delete');
//console.log(deleteBtn);

//Global Variables end

//Startup Scripts
slideActivate();
userStart();

//This will allow the user to type text in the input bar of the search area
function userStart(){
    userInput.keyup((e) => {
        let searchValue = e.target.value;
        if(searchValue && searchValue.trim().length > 0){
            let searchValues = searchValue.toLowerCase();
            userInput.text(searchValues);
        }
    });
}

searchBtn.click((e) => {
    startSearch = userInput.val();
    searchReview(startSearch);
    console.log(startSearch);
    
});

//Search Function from the API
function searchReview(startTxt){
    let vault = dataReview(startTxt);
    $.get(vault, (data) => {
        //console.log('This is where data is coming from', data);
        slideTrack.empty();
        slideActivate(data);
    });
}

function dataReview(startTxt){

    return `https://mvp-creature.onrender.com/creature`;

}

//Slide Results function
//Main Feeder for the project --> if this fails then the project won't work.
function slideActivate(searchTxt){
    
    let searchVaults = dataReview(startSearch);

    //When staring with initial data rerun the get request
    $.get(searchVaults, (data) => {
        console.log('new', data);

        for(let i = 0; i < data.length; i++){
            let searchVault = data[i];
            //console.log(searchVault);

            //blank OBJ created in global currently called 'Card'
            let cardWindow = cardCreator(searchVault);
            card[cardWindow.id] = cardWindow;
            //the id is the linking point between the slide and the display window
            //console.log(cardWindow.id);
            
            let slideBox = $('<div id="holder" class="slide-box"></div>');
            slideTrack.append(slideBox);

            let slideBackground = $(`<span class="slide-info"></span>`);
            slideBox.append(slideBackground);
            slideBackground.append(cardWindow.slideTitle);
            slideBackground.append(cardWindow.slideImg);

        }

        //assign current slide to the first child element
        //console.log('current track', slideTrack);
        let firstChild = slideTrack[0].children[0];
        //console.log('first Child', firstChild);
        firstChild.classList.add('active');

        const slides = [... slideTrack[0].children];
        //console.log('Im working here', slides);
        let slideWidth = slides[0].getBoundingClientRect().width;
        //console.log(slideWidth);
        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index +'px';
        });


    });
}


// //Delete Element Test
// deleteBtn.click((e) => {
    
// });

//Blank Card Hoolder to hold information using the id selected card
// below every function minus the carousel
function cardCreator(searchVault){
    return {
        id: searchVault.id,
        //Slide varibles
        slideTitle: `<h1 id="${searchVault.id}" class="slide-title">${searchVault.name}</h1>`,
        slideImg: `<img id="${searchVault.id}" class="slide-img" src="${searchVault.mon_img}"></img>`
    }
}