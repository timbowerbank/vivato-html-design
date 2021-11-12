// window load
window.addEventListener("load", () => {
    
    initPdSpecial1();


});

// window resize
var resizeTimer;
window.addEventListener("resize", resizeListener);
function resizeListener(e) {
 screenWidth = window.innerWidth;

 clearTimeout(resizeTimer);

 resizeTimer = setTimeout(()=> {
    initPdSpecial1();
 }, 250);

}

// window orientation
window.addEventListener("orientationchange", ()=> {
    initPdSpecial1();
});


// ************************
// *** initPdSpecial1() ***
// ************************
var pdSpecial1MaxCardHeight = 0;
var pdSpecial1MaxButtonHeight = 0;

function initPdSpecial1() {

    pdSpecial1MaxCardHeight = 0;
    pdSpecial1MaxButtonHeight = 0;

    const pdSpecials1 = document.getElementsByClassName("pd-specials-1");

    // *** loop through each parent
    for(const pdSpecial of pdSpecials1) {

        const pdSpecialParentId = pdSpecial.id;

        // *** loop through their desktop buttons
        const pdSpecialButtons = pdSpecial.getElementsByClassName("pd-specials-1-button");
        for(const pdSpecialBtn of pdSpecialButtons) {
            // add parent id
            pdSpecialBtn.setAttribute('data-pd-special-one-id', pdSpecialParentId);

            // add the event listener
            pdSpecialBtn.addEventListener("click", pdSpecial1BtnListener);

            // calc total height
            pdSpecial1MaxButtonHeight += pdSpecialBtn.offsetHeight;
            
        }

        // *** loop through their mobile buttons
        const pdMobileButtons = pdSpecial.getElementsByClassName("pd-specials-1-button-mobile");
        for (const pdMobileBtn of pdMobileButtons) {
            // set the reference of the parent
            pdMobileBtn.setAttribute('data-pd-special-one-id', pdSpecialParentId);

            // add the event listener
            pdMobileBtn.addEventListener("click", pdSpecial1BtnListener);
        }

        // *** loop through their cards to find the max height, sort the aria-hidden attribute at the same time
        const pdSpecialCards = pdSpecial.getElementsByClassName("pd-specials-1-card");
        // set a firstCard variable to manage the aria-hidden value
        let firstCard = true;
        for(const card of pdSpecialCards) {
            if(card.offsetHeight > pdSpecial1MaxCardHeight) {
                pdSpecial1MaxCardHeight = card.offsetHeight;
            }
            if(firstCard) {
                card.setAttribute("aria-hidden", "false");
                firstCard = false;
            } else {
                card.setAttribute("aria-hidden", "true");
            }
        }

        let finalHeight = 0;
        // calc which is greater
        if(pdSpecial1MaxCardHeight > pdSpecial1MaxButtonHeight) {
            finalHeight = pdSpecial1MaxCardHeight;
        } else {
            finalHeight = pdSpecial1MaxButtonHeight;
        }

        // get the col that is the container for the cards
        const pdCardCol = pdSpecial.getElementsByClassName("pd-specials-1-card-col")[0];

        // only set the heights if the width of the screen is greater than 991
        if(window.innerWidth > 991) {
            // set the height of each card and the pd-specials-button-1-outer
            for(const card of pdSpecialCards) {
                card.setAttribute("style", `height: ${finalHeight}px;`);
            }

            const btnOuter = pdSpecial.getElementsByClassName("pd-specials-1-buttons-outer")[0];
            btnOuter.setAttribute("style", `height: ${finalHeight}px;`);

            // also set the height of the outer col otherwise the content below collapses into it
            pdCardCol.setAttribute("style",`height: ${finalHeight}px;`);
        } else {
            // remove the style for cards and its col which may have been set previously with height

            for(const card of pdSpecialCards) {
                card.removeAttribute("style");
            }

            pdCardCol.removeAttribute("style");

        }

    }
}



function pdSpecial1BtnListener(e) {
    e.preventDefault();
    const pdBtn = e.currentTarget;
    const pdBtnCardId = pdBtn.dataset.pdSpecialOne;
    const pdParentId = pdBtn.dataset.pdSpecialOneId;

    // loop through all buttons to add or remove 'show' class
    const pdParent = document.getElementById(pdParentId);
    // if(window.innerWidth > 991) {

        const pdBtns = pdParent.getElementsByClassName("pd-specials-1-button");
        for(const btn of pdBtns) {
            if(btn.dataset.pdSpecialOne === pdBtnCardId) {
                // add show
                btn.classList.add("show");
            } else {
                // remove show if it is present
                if(btn.classList.contains("show")) {
                    btn.classList.remove("show");
                }
            }
        }

    // } else {

        const pdBtnsMob = pdParent.getElementsByClassName("pd-specials-1-button-mobile");
        for(const btn of pdBtnsMob) {
            if(btn.dataset.pdSpecialOne === pdBtnCardId) {
                // add show
                btn.classList.add("show");
            } else {
                // remove show if it is present
                if(btn.classList.contains("show")) {
                    btn.classList.remove("show");
                }
            }
        }
    // }
    

    // add show to the correct slide
    const pdCards = pdParent.getElementsByClassName("pd-specials-1-card");
    for(const card of pdCards) {
        if(card.id === pdBtnCardId) {
            card.classList.add("show");
            card.setAttribute("aria-hidden", "false");
        } else {
            if(card.classList.contains("show")) {
                card.classList.remove("show");
                card.setAttribute("aria-hidden", "true");
            }
        }
    }
}