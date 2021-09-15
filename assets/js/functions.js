// load event on the window object
window.addEventListener("load", () => {

    // initNavScrollListener()
    initNavScrollListener5();

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