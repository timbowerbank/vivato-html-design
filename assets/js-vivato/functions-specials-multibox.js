// window load
window.addEventListener("load", () => {
    
    initPdSpecialMultibox();


});

// window resize
var resizeTimer;
window.addEventListener("resize", resizeListener);
function resizeListener(e) {
 screenWidth = window.innerWidth;

 clearTimeout(resizeTimer);

 resizeTimer = setTimeout(()=> {
    initPdSpecialMultibox();
 }, 250);

}

// window orientation
window.addEventListener("orientationchange", ()=> {
    initPdSpecialMultibox();
});


// *******************************
// *** initPdSpecialMultibox() ***
// *******************************
var pdSpecialMultiboxCardHeight = 0;
var pdSpecialMultiboxMaxButtonHeight = 0;

function initPdSpecialMultibox() {

    pdSpecialMultiboxCardHeight = 0;
    pdSpecialMultiboxMaxButtonHeight = 0;

    const pdSpecialsMultibox = document.getElementsByClassName("pd-specials-multiBox");

    // *** loop through each parent
    for(const pdSpecial of pdSpecialsMultibox) {

        const pdSpecialParentId = pdSpecial.id;

        // *** loop through their desktop buttons
        const pdSpecialButtons = pdSpecial.getElementsByClassName("pd-specials-multiBox-button");
        for(const pdSpecialBtn of pdSpecialButtons) {
            // add parent id
            pdSpecialBtn.setAttribute('data-pd-special-multibox-id', pdSpecialParentId); // data-pd-special-one-id

            // add the event listener
            pdSpecialBtn.addEventListener("click", pdSpecial1BtnListener);

            // calc total height
            pdSpecialMultiboxMaxButtonHeight += pdSpecialBtn.offsetHeight;
            
        }

        // *** loop through their mobile buttons
        const pdMobileButtons = pdSpecial.getElementsByClassName("pd-specials-multiBox-button-mobile");
        for (const pdMobileBtn of pdMobileButtons) {
            // set the reference of the parent
            pdMobileBtn.setAttribute('data-pd-special-multibox-id', pdSpecialParentId);

            // add the event listener
            pdMobileBtn.addEventListener("click", pdSpecial1BtnListener);
        }

        // *** loop through their cards to find the max height, sort the aria-hidden attribute at the same time
        const pdSpecialCards = pdSpecial.getElementsByClassName("pd-specials-multiBox-card");
        // set a firstCard variable to manage the aria-hidden value
        let firstCard = true;
        for(const card of pdSpecialCards) {
            if(card.offsetHeight > pdSpecialMultiboxCardHeight) {
                pdSpecialMultiboxCardHeight = card.offsetHeight;
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
        if(pdSpecialMultiboxCardHeight > pdSpecialMultiboxMaxButtonHeight) {
            finalHeight = pdSpecialMultiboxCardHeight;
        } else {
            finalHeight = pdSpecialMultiboxMaxButtonHeight;
        }

        // get the col that is the container for the cards
        const pdCardCol = pdSpecial.getElementsByClassName("pd-specials-multiBox-card-col")[0];

        // only set the heights if the width of the screen is greater than 991
        if(window.innerWidth > 991) {
            // set the height of each card and the pd-specials-button-multiBox-outer
            for(const card of pdSpecialCards) {
                card.setAttribute("style", `height: ${finalHeight}px;`);
            }

            const btnOuter = pdSpecial.getElementsByClassName("pd-specials-multiBox-buttons-outer")[0];
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
    const pdBtnCardId = pdBtn.dataset.pdMultibox; //pd-multibox
    const pdParentId = pdBtn.dataset.pdSpecialMultiboxId; //data-pd-special-multibox-id

    // loop through all buttons to add or remove 'show' class
    const pdParent = document.getElementById(pdParentId);
    // if(window.innerWidth > 991) {

        const pdBtns = pdParent.getElementsByClassName("pd-specials-multiBox-button");
        for(const btn of pdBtns) {
            if(btn.dataset.pdMultibox === pdBtnCardId) {
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

        const pdBtnsMob = pdParent.getElementsByClassName("pd-specials-multiBox-button-mobile");
        for(const btn of pdBtnsMob) {
            if(btn.dataset.pdMultibox === pdBtnCardId) {
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
    const pdCards = pdParent.getElementsByClassName("pd-specials-multiBox-card");
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