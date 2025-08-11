window.addEventListener("load", () => {
    // check to see if the document has pd-section-21
    if(document.getElementsByClassName('pd-section-21') !== null) {
        // initSection21
        initSection21();
    }
});


// *** initSection21() ***
function initSection21() {
    // get all instances of pd-section-21
    const allSect21s = document.getElementsByClassName('pd-section-21');

    // loop through all sect21s
    for(const sect of allSect21s) {

        // get all pd-section-21-btn
        const btns = sect.getElementsByClassName('pd-section-21-card-btn');

        // loop through all the content bodies of this section
        const bodies = sect.getElementsByClassName('pd-section-21-card-body');

        // loop through btns and add toggleSubSection21Listener
        for(const btn of btns) {
            btn.addEventListener("click", toggleSubSection21Listener);
        }

        for(const bod of bodies) {
            bod.addEventListener('transitionend', transitionEndSubSection21Listener);
        }


    }


}

function toggleSubSection21Listener(e) {
    e.preventDefault();

    // get the btn
    const btn = e.currentTarget;
    // console.log(btn);

    // get it's sibling body
    const body = btn.nextElementSibling;

    // get parent of the section
    const parent = btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

    // get the toggle button
    const toggleIndicator = btn.getElementsByClassName('pd-section-21-card-toggle')[0];

    // get the outer card
    const outerCard = btn.parentElement;

    if(body.classList.contains('pd-show-content')) {
        // the body is OPEN and needs closing
        closeAllSect21Bodies(parent.id);

    } else {
        // close any bodies that might be currently open
        closeAllSect21Bodies(parent.id);


        // the body is CLOSED and needs opening
        body.classList.add('pd-show-content');

        // get the height of the body
        const bodyHeight = body.offsetHeight;
        const bodyHeightStyle = `height: ${bodyHeight}px;`;

        // add pd-collapsing and force a repaint
        body.classList.add('pd-collapsing');
        void(body.offsetHeight);

        // set the style attribute
        body.style = bodyHeightStyle;

        // set aria of outercard
        outerCard.setAttribute("aria-expanded", "true");

        // add pd-show-content to toggleIndicator
        toggleIndicator.classList.add('pd-show-content');

    }

}

function closeAllSect21Bodies(parentId) {
    const parent = document.getElementById(parentId);
    const allBodies = parent.getElementsByClassName('pd-section-21-card-body');
    const allToggleIndicators = parent.getElementsByClassName('pd-section-21-card-toggle');
    for(const bod of allBodies) {
        if(bod.classList.contains('pd-show-content')) {
            bod.removeAttribute('style');
            bod.classList.add('pd-collapsing');
        }
    }

    const outerCards = parent.getElementsByClassName('pd-section-21-card');
    for(const card of outerCards) {
        card.setAttribute("aria-expanded", "false");
    }

    for(const toggle of allToggleIndicators) {
        toggle.classList.remove('pd-show-content');
    }
}

function transitionEndSubSection21Listener(e) {
    e.preventDefault();

    // get the target
    const body = e.currentTarget;

    // remove pd-collapsin
    body.classList.remove('pd-collapsing');

    if(body.getAttribute("style")== null || body.getAttribute("style") == "") {
        // then remove pd-show-content class
        if(body.classList.contains('pd-show-content')) {
            body.classList.remove('pd-show-content');
        }
    }
}