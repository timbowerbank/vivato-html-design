window.addEventListener("load", () => {
    initPeople1Modals();
});

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

    // set the body to no scroll
    people1ModalOuterBody.classList.add("pd-people-1-modal-body-no-scroll");

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

}


function closePeople1ModalListener(e) {

    // set the body to  scroll
    people1ModalOuterBody.classList.remove("pd-people-1-modal-body-no-scroll");

    // get a reference to the open modal
    const modal = document.getElementById(peopleModalId);

    // close the modal
    modal.classList.remove("pd-open");

    // remove the style attr
    modal.removeAttribute("style");

}