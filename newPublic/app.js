//console.log($);
//console.log('hi');

//Global Variables for project
//slide carousel variables
let slideCon = $('.slide_container');
let slideTrack = $('#slide_track');
//carousel functionality
let nextBtn = $('#next');
let prevBtn = $('#prev');

let card = {};

//search variables
let userInput = $('#search');
let searchBtn = $('#submit');

//Search Criteria
let startSearch;

//display variable
let display = $('.display-holder')

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
    e.preventDefault(); //prevent the input& search from submitting normally
    startSearch = userInput.val();
    searchReview(startSearch);
    console.log(startSearch);

    //display items
    display.empty();
    display.removeClass('active');
    
});

//Search Function from the API
function searchReview(startTxt){
    let vault = dataReview(startTxt);
    $.get(vault, (data) => {
        console.log('This is where data is coming from', data);
        slideTrack.empty();
        slideActivate(data);
    });
}

function dataReview(startTxt){

    return `https://test2-5wmp.onrender.com/creature`;

}

//Slide Results function
//Main Feeder for the project --> if this fails then the project won't work.
function slideActivate(searchTxt){
    
    let searchVaults = dataReview(startSearch);

    //When staring with initial data rerun the get request
    $.get(searchVaults, (data) => {
        //console.log('new', data);

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

slideTrack.click((e) => {
    //console.log('hi');

    //When selecting class make sure you select the element storing the id of the object to be selected
    let resultElement = e.target.getAttribute('class') === 'slide-img';
    //console.log(resultElement);

    if(resultElement){
        //Activate curtrent selected creature
        display.addClass('active');
        //disable previous creature
        display.empty();

        let cardId = e.target.id;
        //console.log(cardId);

        //the gobal defined OBJ is the start of the right argument
        let cardDisplay = card[cardId];
        //console.log(cardDisplay);

        let cardReaveal = displayWindow(cardDisplay);
        display.append(cardReaveal);

    }

}); 

/*
    This function will allow the user to select a result from the slide carousel
    & have it displayed in the display window area
*/
//Display window function -- results from selecting a slide
function displayWindow(cardDisplay){
    //Build the return as the DOM would appear
    //All values are coming from the card creatir function  Object
    return`
        <div id="display-box">
            <h1 id="dis-title">${cardDisplay.disTitle}</h1>
            <div id="stats">Creature Information
                <p>Hit Points:${cardDisplay.health}/ Challenge:${cardDisplay.chal} with (${cardDisplay.exp})xp</p>
            </div>
            <div id="grid">
                <img id="${cardDisplay.id}" class="mon_img" src="${cardDisplay.disImg}"></img>
            </div>
            <p id="text">${cardDisplay.mon_des}</p>
            <p id="text>${cardDisplay.info}</p>
        </div>
    `
}

/*
    Lines deleted till more information is added
    <p>STR:${cardDisplay.strength}/ DEX:${cardDisplay.dex}/ CON:${cardDisplay.cons}/ INT:${cardDisplay.intel}/ WIS:${cardDisplay.wis}/ CHA:${cardDisplay.charisma}</p>
    Armor Class:${cardDisplay.armor}/ 
    <div id="attack">${cardDisplay.attack}</div>
    <div id="special">${cardDisplay.special}</div>
*/

// //Delete Element Test
// deleteBtn.click((e) => {
    
// });

//Blank Card Hoolder to hold information using the id selected card
// below every function minus the carousel
function cardCreator(searchVault){
    return {
        id: searchVault.id,
        //Slide varibles
        slideTitle: `<h1 id="${searchVault.id}" class="slide-title">${searchVault.c_name}</h1>`,
        slideImg: `<img id="${searchVault.id}" class="slide-img" src="${searchVault.mon_img}"></img>`,
        //Display window variables
        disTitle: searchVault.c_name.toUpperCase(),
        disImg: searchVault.mon_img,
        //armor: searchVault.armor,
        health: searchVault.health,
        //strength: searchVault.stre,
        //dex: searchVault.dex,
        //cons: searchVault.cons,
        //intel: searchVault.intel,
        //wis: searchVault.wis,
        //charisma: searchVault.charisma,
        chal: searchVault.chal,
        //attack: searchVault.attack,
        //special: searchVault.special,
        mon_des: searchVault.d_descrip, //[0].description
        exp: searchVault.exp,
        info: searchVault.info
    }
}

nextBtn.click(() => {
    //console.log('next button action', slideTrack);

    //Establishing the two slides needed
    const currentSlide = $('.active');
    const nextSlide = currentSlide[0].nextElementSibling || slideTrack[0].lastElementChild;
    //console.log(currentSlide);
    
    //clear the current display window
    display.empty();
    
    //how to much to move towards the next slide
    const moveAmount = nextSlide.style.left;
    //console.log(moveAmount);
    
    //move to next slide
    slideTrack.css('transform', `translateX(-${moveAmount})`);
    currentSlide.removeClass('active');
    nextSlide.classList.add('active');

});

prevBtn.click(() => {
    //console.log(slideTrack);
    
    //Establishing the two slides needed
    const currentSlide = $('.active');
    const prevSlide = currentSlide[0].previousElementSibling || slideTrack[0].firstElementChild;
    //console.log(currentSlide);
    
    //clear the current display window
    display.empty();
    
    //how to much to move towards the previous slide
    const moveAmount = prevSlide.style.left;
    //console.log(moveAmount);
    
    //move to the previous slide
    slideTrack.css('transform', `translateX(-${moveAmount})`);
    currentSlide.removeClass('active');
    prevSlide.classList.add('active');

});