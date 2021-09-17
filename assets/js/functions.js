// load event on the window object
window.addEventListener("load", () => {

    // initNavScrollListener()
    //initNavScrollListener5();

    // initPdDropdowns()
    initPdDropdowns();

});




// ********************
// *** pd-mainNav-5 ***
// ********************

var mainNav5;
var mainNavBurger5;

// initNavScrollListener5() ***
function initNavScrollListener5() {
    // assign mainNav and mainNavBurger
    mainNav5 = document.querySelector("#pd-mainNav-5");
    mainNavBurger5 = document.querySelector(".hamburger-inner");

    // add a scroll listener to the main window object
    window.addEventListener("scroll", navScrollListener5);


}

// *** navScrollListener5() ***
function navScrollListener5() {
    
    // if distance scrolled is 300px from top
    // then add pd-mainNav-5-inverted to id: pd-mainNav-5
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if(!mainNav5.classList.contains("pd-mainNav-5-inverted")) {
            mainNav5.classList.add("pd-mainNav-5-inverted");
            mainNavBurger5.classList.remove("hamburger-inverted");
        } 
    } else {
        if(mainNav5.classList.contains("pd-mainNav-5-inverted")) {
            mainNav5.classList.remove("pd-mainNav-5-inverted");
            mainNavBurger5.classList.add("hamburger-inverted");
        }

    }


}

// ************************
// *** end pd-mainNav-5 ***
// ************************

// ********************
// *** pd-mainNav-6 ***
// ********************

var pdDropdowns;
var dropDownActive;
function initPdDropdowns() {
    // find all elements with the class .pd-dropdown
    pdDropdowns = document.querySelectorAll(".pd-dropdown-toggle");
   // loop through all dropdowns and add an event listener
   for(const dropdown of pdDropdowns) {
        dropdown.addEventListener("click", dropdownClickListener);
   }
}

function dropdownClickListener(e) {
    // prevent default behaviour
    e.preventDefault();

    // get the target and its next sibling which is the dropdown menu
    let dropDownBtn = e.target;
    dropDownActive = dropDownBtn.nextElementSibling;
    dropDownActive.classList.toggle("show");
    
    // listen for click events on the document
    document.addEventListener("click", closeDropDownListener);
}

function closeDropDownListener(e) {

    if (!e.target.matches('.pd-dropdown-toggle')) {
        // loop through all pdDropdowns and if they have show
        dropDownActive.classList.toggle("show");

        // loop through all .pd-dropdown-menu
        let dropDownsToCheck = document.querySelectorAll(".pd-dropdown-menu");
        for (const dropdown of dropDownsToCheck) {
            if(dropdown.classList.contains("show")) {
                dropdown.classList.toggle("show");
            }
        }

    }



}


// ************************
// *** end pd-mainNav-6 ***
// ************************