// load event on the window object
window.addEventListener("load", () => {

    // initHamburgerBtn6()
    initHamburgerBtn6();

    // initNavScrollListener()
    initNavScrollListener6();

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

// initHamburger
var hamburgerBtn6;
var hamburgerInner6;
var outerNav6;
var innerNav6;
var navToggle6 = false;
var isInvertedState6 = false;
function initHamburgerBtn6() {

    hamburgerBtn6 = document.getElementsByClassName("hamburger")[0];
    hamburgerBtn6.addEventListener("click", manageMobMenuListener6);
    hamburgerInner6 = document.querySelector(".hamburger-inner");
    innerNav6 = document.querySelector(".pd-mainNav-inner-6");
    outerNav6 = document.querySelector(".pd-mainNav-6");

}

function manageMobMenuListener6(e) {
    
    navToggle6 = !navToggle6;

    if(navToggle6) {
  
      // manage the look of the hamburger menu
      hamburgerBtn6.classList.add("is-active");
  
      // activate the site menu by adding CSS and add open class to outer nav 
      innerNav6.classList.add("open");
      outerNav6.classList.add("open");

      // check state of hamburger menu
      if(hamburgerInner6.classList.contains("hamburger-inverted")) {
          // it means it is white
          isInvertedState6 = true;
      } else {
          // it means it is black
          isInvertedState6 = false;
          hamburgerInner6.classList.add("hamburger-inverted");
      }
      

  
    } else {
  
        hamburgerBtn6.classList.remove("is-active");

        // deactivate menu
        innerNav6.classList.remove("open");
        outerNav6.classList.remove("open");

        // restore state of hamburger menu
        if(!isInvertedState6) {
            hamburgerInner6.classList.remove("hamburger-inverted");
        }
  
    }


}

// end hamburger


// start scroll listener

var mainNav6;
var mainNavBurger6;

// initNavScrollListener6() ***
function initNavScrollListener6() {
    // assign mainNav and mainNavBurger
    mainNav6 = document.querySelector("#pd-mainNav-6");
    mainNavBurger6 = document.querySelector(".hamburger-inner");

    // add a scroll listener to the main window object
    window.addEventListener("scroll", navScrollListener6);


}

// *** navScrollListener6() ***
function navScrollListener6() {
    
    // if distance scrolled is 300px from top
    // then add pd-mainNav-6-inverted to id: pd-mainNav-6
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if(!mainNav6.classList.contains("pd-mainNav-6-inverted")) {
            mainNav6.classList.add("pd-mainNav-6-inverted");
            if(!navToggle6) {
                mainNavBurger6.classList.remove("hamburger-inverted");
            }
            
        } 
    } else {
        if(mainNav6.classList.contains("pd-mainNav-6-inverted")) {
            mainNav6.classList.remove("pd-mainNav-6-inverted");
            mainNavBurger6.classList.add("hamburger-inverted");
        }

    }


}

// end scroll listener

// start dropdowns

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
    let isDropDownOpening = false;
    dropDownActive = dropDownBtn.nextElementSibling;
    
    // listen for click events on the document
    document.addEventListener("click", closeDropDownListener);

    // check for mobile
    if(window.innerWidth > 767) {

        dropDownActive.classList.toggle("pd-show");
           
    } else {

        if(!dropDownActive.classList.contains("pd-show")) {

            // open the toggle
            isDropDownOpening = true;

            dropDownActive.classList.add("pd-show");
            let dropDownActiveHeight = dropDownActive.offsetHeight;
            dropDownActiveHeight = "height: " + dropDownActiveHeight + "px";

            // add pd-collapsing, repaint dom
            dropDownActive.classList.add("pd-collapsing");
            console.log(dropDownActive.offsetHeight); // forces repaint!!

            // set the height on the style attribute
            dropDownActive.setAttribute("style", dropDownActiveHeight);

            
        } else {
            // close the toggle
            dropDownActive.removeAttribute("style");
            dropDownActive.classList.add("pd-collapsing");

            isDropDownOpening = false;

        }

        // listen for the transition end event
        dropDownActive.addEventListener("transitionend", (e)=> {
            dropDownActive.classList.remove("pd-collapsing");

            if(!isDropDownOpening) {
                // remove pd-show
                dropDownActive.classList.remove("pd-show");
                isDropDownOpening = !isDropDownOpening;
            }
        });
        
    }
}




function closeDropDownListener(e) {

    if (!e.target.matches('.pd-dropdown-toggle')) {
        // loop through all pdDropdowns and if they have show
        dropDownActive.classList.toggle("pd-show");
        

        // loop through all .pd-dropdown-menu
        let dropDownsToCheck = document.querySelectorAll(".pd-dropdown-menu");
        for (const dropdown of dropDownsToCheck) {
            if(dropdown.classList.contains("pd-show")) {
                dropdown.classList.toggle("pd-show");
            }
        }

    }



}

// end dropdowns

// ************************
// *** end pd-mainNav-6 ***
// ************************