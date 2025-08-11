window.addEventListener("load", () => {
    initPeople1Modals();

    resizePeople3Cards();
    initPeople3Cards();
});

window.addEventListener("orientationchange", () => {

    resizePeople3Cards();

});

var resizeTimerPeople;
window.addEventListener("resize", resizeListenerPeople);
function resizeListenerPeople(e) {
    clearTimeout(resizeTimerPeople);

    resizeTimerPeople = setTimeout(function() {
        resizePeople3Cards();

    }, 250);

}

// const deviceType = () => {
//     const ua = navigator.userAgent;
//     if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//         return "tablet";
//     }
//     else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//         return "mobile";
//     }
//     return "desktop";
// };

// function deviceType() {
//     const ua = navigator.userAgent;
//     if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
//         return "tablet";
//     }
//     else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//         return "mobile";
//     }
//     return "desktop";
// }

var people1ModalOuterBody;
function initPeople1Modals() {
    // get all elements by class name: pd-people-1-card-outer and add event listener togglePeople1ModalListener
    const people1ModalLinks = document.getElementsByClassName("pd-people-1-card-outer");
    for(const modalLink of people1ModalLinks) {
        modalLink.addEventListener("click", openPeople1ModalListener);
    }

    // get all elements with class name people-1-modal-close-outer and add an event listener to the next node
    const people1ModalButtons = document.getElementsByClassName("pd-people-1-modal-close-outer");
    for(const modalBtn of people1ModalButtons) {
        const btn = modalBtn.getElementsByTagName("button")[0];
        btn.addEventListener("click", closePeople1ModalListener);
    }

    // get a reference to all the overlays
    const people1ModalOverlays = document.getElementsByClassName("pd-people-1-modal-overlay");
    for(const modalOverlay of people1ModalOverlays) {
        modalOverlay.addEventListener("click", closePeople1ModalListener);
    }

    // get a reference to the body
    people1ModalOuterBody = document.querySelector("body");


}

var peopleModalId = "";
function openPeople1ModalListener(e) {

    // find the scroll postion
    const windowScrollY = window.scrollY;

    // and fix the body
    document.body.style.position = 'fixed';
    document.body.style.width = "100%";
    document.body.style.top = `-${windowScrollY}px`;

    // force the scroll bar to avoid layout shifts
    document.documentElement.style.overflowY = "scroll";

    // set the body to no scroll
    // people1ModalOuterBody.classList.add("pd-people-1-modal-body-no-scroll");

    // get the target
    const modalLink = e.currentTarget;

    // get the id of the modal
    const modalId = modalLink.dataset.modalId;

    // get a reference to the modal window
    const modal = document.getElementById(modalId);

    // open the modal
    modal.classList.add("pd-open");

    // force a repaint
    void(modal.offsetHeight);

    // set the opacity to 1
    modal.style.opacity = 1;

    // store a reference to the open modal
    peopleModalId = modalId;

    // check for scroll bar present
    // if(deviceType() === "desktop") {
        // people1ModalOuterBody.style.paddingRight = "20px";
    // }

    // set the height on the html to 101%
    // document.documentElement.style.height = "101%";

    

}


function closePeople1ModalListener(e) {

    

    // remove the style on the html
    document.documentElement.removeAttribute("style");

    // set the body to  scroll
    // people1ModalOuterBody.classList.remove("pd-people-1-modal-body-no-scroll");

    // get a reference to the open modal
    const modal = document.getElementById(peopleModalId);

    // close the modal
    modal.classList.remove("pd-open");

    // remove the style attr
    modal.removeAttribute("style");

    // allow body to scroll again but make sure window is in the same scroll position as it was before
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo({
        left: 0,
        top: parseInt(scrollY || '0') * -1,
        behavior: 'instant'
    });

}

// **************************
// *** initPeople3Cards() ***
// **************************

function initPeople3Cards() {
    // loop through all elements with the class name pd-people-3-card-profile-text
    const peopleCards3 = document.getElementsByClassName("pd-people-3-card-outer");
    for(const card of peopleCards3) {
        card.addEventListener("mouseover", people3CardsMouseOverListener);
        card.addEventListener("mouseout", people3CardsMouseOutListener);
    }
}

function people3CardsMouseOverListener(e) {
    // get the current height from the data object
    const card = e.currentTarget;
    const cardTextBox = card.getElementsByClassName("pd-people-3-card-profile-text")[0];
    const cardHeight = cardTextBox.dataset.cardHeight;
    const newCardHeight = parseInt(cardHeight) + 30;

    cardTextBox.style.height = newCardHeight.toString() + "px";



}

function people3CardsMouseOutListener(e) {

    const card = e.currentTarget;
    const cardTextBox = card.getElementsByClassName("pd-people-3-card-profile-text")[0];
    const cardHeight = cardTextBox.dataset.cardHeight;
    cardTextBox.style.height = cardHeight + "px";

}

function resizePeople3Cards() {
    
    // get a reference to all elements with the pd-people-3-card-profile-text
    const peopleCards = document.getElementsByClassName("pd-people-3-card-profile-text");

    // remove style object
    for(const card of peopleCards) {
        card.removeAttribute("style");
    }

    let peopleCardsHeight = 0;
    for(const card of peopleCards) {
        const cardHeight = card.offsetHeight;
        peopleCardsHeight = cardHeight > peopleCardsHeight ? cardHeight : peopleCardsHeight;
    }

    // now set the height on the style object
    for(const card of peopleCards) {
        const heightAsStr = peopleCardsHeight.toString() + "px";
        card.style.height = heightAsStr;

        // set the height in a data attribute
        card.setAttribute("data-card-height", peopleCardsHeight);
    }
}

