window.addEventListener("load", () => {
    if(document.getElementsByClassName('pd-faqs-2') !== null) {
        initPdFaqs2();
    }



});


// initialise the Faq links
function initPdFaqs2() {
    
    // get all instances of the pd-faqs-2
    const allFaqs = document.getElementsByClassName("pd-faqs-2");
    // loop through each instance
    for(const faqBlock of allFaqs) {

        // *** add listeners to btns
        const allBtns = faqBlock.getElementsByClassName("pd-faqs-2-btn");
        // loop through all buttons to add toggle listener
        for(const btn of allBtns) {
            btn.addEventListener("click", toggleFaqs2Listener);
        }

        // *** add transition end listeners
        const faqBodies = faqBlock.getElementsByClassName("pd-faqs-2-card-body");
        // loop through all bodies and add transition end
        for(const faqBody of faqBodies) {
            faqBody.addEventListener("transitionend", transitionEndFaq2Listener);
        }
    }


}

// *** toggleFaqs2Listener() ***
function toggleFaqs2Listener(e) {

    // prevent the default behaviour
    e.preventDefault();
    
    // assign the button to a variable
    const faqTarget = e.target;
    let faqBtn;

    // check whether button or link
    let faqOuter;
    if(faqTarget.classList.contains("pd-faqs-2-open-close-outer")) {

        faqOuter = faqTarget.parentElement.parentElement.parentElement;
        faqBtn = faqTarget;

    } else {

        faqOuter = faqTarget.parentElement.parentElement;
        faqBtn = faqOuter.querySelector(".pd-faqs-2-open-close-outer");
        
    }    

    // check state
    if(faqOuter.classList.contains("pd-show-content")) {
        // element is OPEN and needs to CLOSE

        // remove the style and add pd-collapsing
        const faqBody = faqOuter.querySelector(".pd-faqs-2-card-body");
        faqBody.removeAttribute("style");
        faqBody.classList.add("pd-collapsing");

        // remove class .pd-show-content class to btn
        faqBtn.classList.remove("pd-show-content");

        // aria-expanded to false on faqOuter
        faqOuter.setAttribute("aria-expanded", "false");

    } else {
        // element is CLOSED and needs to OPEN

        // add pd-show-content to outer and btn
        faqOuter.classList.add("pd-show-content");
        faqBtn.classList.add("pd-show-content");

        // get a ref to the faqBody and its height
        const faqBody = faqOuter.querySelector(".pd-faqs-2-card-body");
        const faqBodyHeight = `height: ${faqBody.offsetHeight}px`;

        // add pd-collapsing and force a repaint
        faqBody.classList.add("pd-collapsing");
        void(faqBody.offsetHeight);

        // set the height on the style attribute
        faqBody.setAttribute("style", faqBodyHeight);

        // aria-expanded to true on faqOuter
        faqOuter.setAttribute("aria-expanded", "true");
    }

}


// *** transitionEndFaq2Listener() ***
function transitionEndFaq2Listener(e) {

    const faqBody = e.target;
    const faqOuter = faqBody.parentElement;

    // remove pd-collapsing
    faqBody.classList.remove("pd-collapsing");

    // remove pd-show-content if style has a height
    if(faqBody.getAttribute("style")== null || faqBody.getAttribute("style") == "") {
        faqOuter.classList.remove("pd-show-content");
    }

}