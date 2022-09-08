// load event on the window object
window.addEventListener("load", () => {

    if(document.getElementById('pd-mainNav-6') !== null) {
        // initHamburgerBtn6()
        initHamburgerBtn6();

        // initNavScrollListener()
        initNavScrollListener6();

        // initPdDropdowns()
        initDropDowns6();

    }

    if(document.getElementById('pd-mainNav-7') !== null) {
        console.log('init nav 7');
        // initHamburgerBtn7
        initHamburgerBtn7();

        // initNavScrollListener7
        initNavScrollListener7();

        // initDropDowns7
        initDropDowns7();
    }
    



    

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

// ****************************************************************************************************************************************

// ********************
// *** pd-mainNav-6 ***
// ********************


// initHamburger
var bodyNav6;
var hamburgerBtn6;
var hamburgerInner6;
var outerNav6;
var innerNav6;
var navToggle6 = false;
var isInvertedState6 = false;


// *** initHamburgerBtn6() ***
function initHamburgerBtn6() {

    bodyNav6 = document.querySelector("body");
    // hamburgerBtn6 = document.getElementsByClassName("hamburger")[0];
    hamburgerBtn6 = document.querySelector(".pd-mainNav-6 .hamburger");
    hamburgerBtn6.addEventListener("click", manageMobMenuListener6);
    hamburgerInner6 = document.querySelector(".hamburger-inner");
    innerNav6 = document.querySelector(".pd-mainNav-inner-6");
    outerNav6 = document.querySelector(".pd-mainNav-6");

}


// *** manageMobMenuListener6() ***
function manageMobMenuListener6(e) {

    const windowScrollY = window.scrollY;
    
    navToggle6 = !navToggle6;

    if(navToggle6) {

        // fix the body
        // document.body.style.position = 'fixed'; // removed as creating error with Safari 15 mobile
        document.body.style.top = `-${windowScrollY}px`;
  
        // check state of hamburger menu
        if(hamburgerInner6.classList.contains("hamburger-inverted")) {
            // it means it is white
            isInvertedState6 = true;

        } else {
            // it means it is black
            isInvertedState6 = false;
            hamburgerInner6.classList.add("hamburger-inverted");
        }

        // manage the look of the hamburger menu
        hamburgerBtn6.classList.add("is-active");
    
        // stop the main body scrolling
        bodyNav6.classList.add("pd-mainNav-6-body-noScroll");

        // activate the site menu by adding CSS and add open class to outer nav 
        innerNav6.classList.add("open");
        outerNav6.classList.add("open");

    } else {

        // allow body to scroll again but make sure window is in the same scroll position as it was before
        const scrollY = document.body.style.top;
        // document.body.style.position = ''; // removed as creating error with Safari 15 mobile
        document.body.style.top = '';
        window.scrollTo({
            left: 0,
            top: parseInt(scrollY || '0') * -1,
            behavior: 'instant'
        });
  
        hamburgerBtn6.classList.remove("is-active");

        // allow body to scroll again
        bodyNav6.classList.remove("pd-mainNav-6-body-noScroll");

        // deactivate menu
        innerNav6.classList.remove("open");
        outerNav6.classList.remove("open");

        // restore state of hamburger menu
        if(isInvertedState6) {
            hamburgerInner6.classList.add("hamburger-inverted");
        } else {
            hamburgerInner6.classList.remove("hamburger-inverted");
        }
  
    }

}

// *** end hamburger ***


// *** start scroll listener ***

var mainNav6;
var mainNavBurger6;

// *** initNavScrollListener6() ***
function initNavScrollListener6() {
    // assign mainNav and mainNavBurger
    mainNav6 = document.querySelector("#pd-mainNav-6");
    mainNavBurger6 = document.querySelector("#pd-mainNav-6 .hamburger-inner");

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


// *** initDropDowns6() ***
function initDropDowns6() {

    // loop through all dropdowns and add the dropDownClickListener2 and the dropDownTransitionEndListener
    const dropDownBtns = document.getElementsByClassName("pd-dropdown-toggle");
    for(const dropDown of dropDownBtns) {
        // add the dropDownClickListener2 to the button
        dropDown.addEventListener("click", dropDownClickListener6);

        // get the ul sibling
        const dropDownUl = dropDown.nextElementSibling;
        dropDownUl.addEventListener("transitionend", dropDownTransitionEndListener6);
    }

    // listen for click events on the document
    document.addEventListener("click", closeDropDownListener6);


}


// *** dropDownClickListener6() ***
function dropDownClickListener6(e) {

    // prevent the default
    e.preventDefault();

    // get mobile state
    const isMobile = window.innerWidth < 768 ? true : false; 

    // get the id of the object which is the next node
    const dropDownBtn = e.target;
    const dropDown = dropDownBtn.nextElementSibling;
    const thisDropDownId = dropDown.id;

    // get a reference to all dropdowns
    const dropDowns = document.getElementsByClassName("pd-dropdown-menu");

    // toggle the ones that are already open
    for(const dropDown of dropDowns) {
        // check it's not this one
        if(dropDown.id !== thisDropDownId && dropDown.classList.contains("pd-show")) {
            // it's open and needs to be shut, act appropriately according to mobile state
            if(isMobile) {
                animateToggleDropDown6(dropDown.id);
            } else {
                // dropDown.classList.remove("pd-show");
                toggleDropDown6(dropDown.id);
            }
            
        }
    }

    // now just toggle the one requesting
    if(isMobile) {
        animateToggleDropDown6(thisDropDownId);
    } else {
        toggleDropDown6(thisDropDownId);
    }

}


// *** closeDropDownListener6() ***
function closeDropDownListener6(e) {

    // get mobile state
    const isMobile = window.innerWidth < 768 ? true : false;

    if(!isMobile) {
        // we're in desktop mode
        // !e.target.matches('.pd-dropdown-toggle')
        if(e.target.matches(".pd-dropdown-toggle") || e.target.matches(".pd-dropdown-item")) {
            // do nothing... this is already taken care of
            
        } else {

            // loop through all the dropdowns and if they have pd-show on them then change them
            const dropDowns = document.getElementsByClassName("pd-dropdown-menu");
            for(const dropDown of dropDowns) {
                if(dropDown.classList.contains("pd-show")) {
                    // then remove it
                    dropDown.classList.remove("pd-show");
                    const dropDownBtn = dropDown.previousElementSibling;
                    dropDownBtn.setAttribute("aria-expanded", "false");
                }
            }

        }

        

    }
}


// *** toggleDropDown6() ***
function toggleDropDown6(newId) {

    // get a reference to the object
    const dropDown = document.querySelector(`#${newId}`);

    // get a reference to the previous sibling, which is the button
    const dropDownBtn = dropDown.previousElementSibling;

    if(dropDown.classList.contains("pd-show")) {
        // we're open and need to shut
        dropDown.classList.remove("pd-show");
        // also set aria-expanded on previous sibling
        dropDownBtn.setAttribute("aria-expanded", "false");
        
    } else {
        // we're closed and we need to open
        dropDown.classList.add("pd-show");
        dropDownBtn.setAttribute("aria-expanded", "true");
    }

}


// *** animateToggleDropDown6() ***
function animateToggleDropDown6(newId) {

    // get a reference to the object
    const dropDown = document.querySelector(`#${newId}`);

    // get a reference to the btn
    const dropDownBtn = dropDown.previousElementSibling;

    // find out if the object is open or closed
    if(dropDown.classList.contains("pd-show")) {

        // we're open

        // close the toggle
        dropDown.removeAttribute("style");
        dropDown.classList.add("pd-collapsing");

        // set the aria expanded attribute
        dropDownBtn.setAttribute("aria-expanded", "false");

    } else {

        // we're closed

        // add pd-show
        dropDown.classList.add("pd-show");

        // get the height and change into a string we can use
        let dropDownActiveHeight = dropDown.offsetHeight;
        dropDownActiveHeight = "height: " + dropDownActiveHeight + "px";

        // add pd-collapsing, repaint dom
        dropDown.classList.add("pd-collapsing");
        // console.log(dropDown.offsetHeight); // forces repaint!!
        void(dropDown.offsetHeight);

        // set the height on the style attribute
        dropDown.setAttribute("style", dropDownActiveHeight);

        // set the aria expanded attribute
        dropDownBtn.setAttribute("aria-expanded", "true");

    }

}


// *** dropDownTransitionEndListener() ***
function dropDownTransitionEndListener6(e) {
    // get a reference to the object
    const dropDown = e.target;

    // get a reference to the previous sibling, which is the button
    const dropDownBtn = dropDown.previousElementSibling;

    // if there is no style attribute - we're closing, so remove pd-show
    if(dropDown.getAttribute("style") == null || dropDown.getAttribute("style") == "") {
        // remove pd-show
        dropDown.classList.remove("pd-show");
        
    } 

    // remove pd-collapsing
    dropDown.classList.remove("pd-collapsing");

}


// end dropdowns

// ************************
// *** end pd-mainNav-6 ***
// ************************

// ****************************************************************************************************************************************

// ****************************************************************************************************************************************

// ********************
// *** pd-mainNav-7 ***
// ********************


// initHamburger
var bodyNav7;
var hamburgerBtn7;
var hamburgerInner7;
var outerNav7;
var innerNav7;
var navToggle7 = false;
var isInvertedState7 = false;


// *** initHamburgerBtn7() ***
function initHamburgerBtn7() {

    bodyNav7 = document.querySelector("body");
    // hamburgerBtn6 = document.getElementsByClassName("hamburger")[0];
    hamburgerBtn7 = document.querySelector(".pd-mainNav-7 .hamburger");
    hamburgerBtn7.addEventListener("click", manageMobMenuListener7);
    hamburgerInner7 = document.querySelector(".hamburger-inner");
    innerNav7 = document.querySelector(".pd-mainNav-inner-7");
    outerNav7 = document.querySelector(".pd-mainNav-7");

}


// *** manageMobMenuListener7() ***
function manageMobMenuListener7(e) {

    const windowScrollY = window.scrollY;
    
    navToggle7 = !navToggle7;

    if(navToggle7) {

        // fix the body
        document.body.style.position = 'fixed';
        document.body.style.top = `-${windowScrollY}px`;
  
        // check state of hamburger menu
        if(hamburgerInner7.classList.contains("hamburger-inverted")) {
            // it means it is white
            isInvertedState7 = true;

        } else {
            // it means it is black
            isInvertedState7 = false;
            hamburgerInner7.classList.add("hamburger-inverted");
        }

        // manage the look of the hamburger menu
        hamburgerBtn7.classList.add("is-active");
    
        // stop the main body scrolling
        bodyNav7.classList.add("pd-mainNav-7-body-noScroll");

        // activate the site menu by adding CSS and add open class to outer nav 
        innerNav7.classList.add("open");
        outerNav7.classList.add("open");

    } else {

        // allow body to scroll again but make sure window is in the same scroll position as it was before
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo({
            left: 0,
            top: parseInt(scrollY || '0') * -1,
            behavior: 'instant'
        });
  
        hamburgerBtn7.classList.remove("is-active");

        // allow body to scroll again
        bodyNav7.classList.remove("pd-mainNav-7-body-noScroll");

        // deactivate menu
        innerNav7.classList.remove("open");
        outerNav7.classList.remove("open");

        // restore state of hamburger menu
        if(isInvertedState7) {
            hamburgerInner7.classList.add("hamburger-inverted");
        } else {
            hamburgerInner7.classList.remove("hamburger-inverted");
        }
  
    }

}

// *** end hamburger ***


// *** start scroll listener ***

var mainNav7;
var mainNavBurger7;

// *** initNavScrollListener7() ***
function initNavScrollListener7() {
    // assign mainNav and mainNavBurger
    mainNav7 = document.querySelector("#pd-mainNav-7");
    mainNavBurger7 = document.querySelector("#pd-mainNav-7 .hamburger-inner");

    // add a scroll listener to the main window object
    window.addEventListener("scroll", navScrollListener7);


}


// *** navScrollListener7() ***
function navScrollListener7() {
    
    // if distance scrolled is 300px from top
    // then add pd-mainNav-7-inverted to id: pd-mainNav-7
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if(!mainNav7.classList.contains("pd-mainNav-7-inverted")) {
            mainNav7.classList.add("pd-mainNav-7-inverted");
            if(!navToggle7) {
                // mainNavBurger7.classList.remove("hamburger-inverted");
            }
            
        } 
    } else {
        if(mainNav7.classList.contains("pd-mainNav-7-inverted")) {
            mainNav7.classList.remove("pd-mainNav-7-inverted");
            // mainNavBurger7.classList.add("hamburger-inverted");
        }

    }


}


// *** initDropDowns7() ***
function initDropDowns7() {

    // loop through all dropdowns and add the dropDownClickListener2 and the dropDownTransitionEndListener
    const dropDownBtns = document.getElementsByClassName("pd-dropdown-toggle");
    for(const dropDown of dropDownBtns) {
        // add the dropDownClickListener2 to the button
        dropDown.addEventListener("click", dropDownClickListener7);

        // get the ul sibling
        const dropDownUl = dropDown.nextElementSibling;
        dropDownUl.addEventListener("transitionend", dropDownTransitionEndListener7);
    }

    // listen for click events on the document
    document.addEventListener("click", closeDropDownListener7);


}


// *** dropDownClickListener7() ***
function dropDownClickListener7(e) {

    // prevent the default
    e.preventDefault();

    // get mobile state
    const isMobile = window.innerWidth < 768 ? true : false; 

    // get the id of the object which is the next node
    const dropDownBtn = e.target;
    const dropDown = dropDownBtn.nextElementSibling;
    const thisDropDownId = dropDown.id;

    // get a reference to all dropdowns
    const dropDowns = document.getElementsByClassName("pd-dropdown-menu");

    // toggle the ones that are already open
    for(const dropDown of dropDowns) {
        // check it's not this one
        if(dropDown.id !== thisDropDownId && dropDown.classList.contains("pd-show")) {
            // it's open and needs to be shut, act appropriately according to mobile state
            if(isMobile) {
                animateToggleDropDown7(dropDown.id);
            } else {
                // dropDown.classList.remove("pd-show");
                toggleDropDown7(dropDown.id);
            }
            
        }
    }

    // now just toggle the one requesting
    if(isMobile) {
        animateToggleDropDown7(thisDropDownId);
    } else {
        toggleDropDown7(thisDropDownId);
    }

}


// *** closeDropDownListener7() ***
function closeDropDownListener7(e) {

    // get mobile state
    const isMobile = window.innerWidth < 768 ? true : false;

    if(!isMobile) {
        // we're in desktop mode
        // !e.target.matches('.pd-dropdown-toggle')
        if(e.target.matches(".pd-dropdown-toggle") || e.target.matches(".pd-dropdown-item")) {
            // do nothing... this is already taken care of
            
        } else {

            // loop through all the dropdowns and if they have pd-show on them then change them
            const dropDowns = document.getElementsByClassName("pd-dropdown-menu");
            for(const dropDown of dropDowns) {
                if(dropDown.classList.contains("pd-show")) {
                    // then remove it
                    dropDown.classList.remove("pd-show");
                    const dropDownBtn = dropDown.previousElementSibling;
                    dropDownBtn.setAttribute("aria-expanded", "false");
                }
            }

        }

        

    }
}


// *** toggleDropDown7() ***
function toggleDropDown7(newId) {

    // get a reference to the object
    const dropDown = document.querySelector(`#${newId}`);

    // get a reference to the previous sibling, which is the button
    const dropDownBtn = dropDown.previousElementSibling;

    if(dropDown.classList.contains("pd-show")) {
        // we're open and need to shut
        dropDown.classList.remove("pd-show");
        // also set aria-expanded on previous sibling
        dropDownBtn.setAttribute("aria-expanded", "false");
        
    } else {
        // we're closed and we need to open
        dropDown.classList.add("pd-show");
        dropDownBtn.setAttribute("aria-expanded", "true");
    }

}


// *** animateToggleDropDown7() ***
function animateToggleDropDown7(newId) {

    // get a reference to the object
    const dropDown = document.querySelector(`#${newId}`);

    // get a reference to the btn
    const dropDownBtn = dropDown.previousElementSibling;

    // find out if the object is open or closed
    if(dropDown.classList.contains("pd-show")) {

        // we're open

        // close the toggle
        dropDown.removeAttribute("style");
        dropDown.classList.add("pd-collapsing");

        // set the aria expanded attribute
        dropDownBtn.setAttribute("aria-expanded", "false");

    } else {

        // we're closed

        // add pd-show
        dropDown.classList.add("pd-show");

        // get the height and change into a string we can use
        let dropDownActiveHeight = dropDown.offsetHeight;
        dropDownActiveHeight = "height: " + dropDownActiveHeight + "px";

        // add pd-collapsing, repaint dom
        dropDown.classList.add("pd-collapsing");
        // console.log(dropDown.offsetHeight); // forces repaint!!
        void(dropDown.offsetHeight);

        // set the height on the style attribute
        dropDown.setAttribute("style", dropDownActiveHeight);

        // set the aria expanded attribute
        dropDownBtn.setAttribute("aria-expanded", "true");

    }

}


// *** dropDownTransitionEndListener() ***
function dropDownTransitionEndListener7(e) {
    // get a reference to the object
    const dropDown = e.target;

    // get a reference to the previous sibling, which is the button
    const dropDownBtn = dropDown.previousElementSibling;

    // if there is no style attribute - we're closing, so remove pd-show
    if(dropDown.getAttribute("style") == null || dropDown.getAttribute("style") == "") {
        // remove pd-show
        dropDown.classList.remove("pd-show");
        
    } 

    // remove pd-collapsing
    dropDown.classList.remove("pd-collapsing");

}


// end dropdowns

// ************************
// *** end pd-mainNav-7 ***
// ************************

// ****************************************************************************************************************************************