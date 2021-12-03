window.addEventListener("load", () => {
    initPdHeroVideo5ModalWindows();

    initPdHeroVideo6ModalWindows();

});

// *** start pdHeroVideo5Modal ********************************************************************************

var pdModalWindow5Link = [];
// var pdModalWindow = [];
var pdModal5WindowClose = [];

function initPdHeroVideo5ModalWindows() {
    
    // pdModalWindow = document.getElementsByClassName("pd-hero-video-5-modal");
    pdModalWindow5Link = document.getElementsByClassName("pd-hero-video-5-modal-link");
    pdModal5WindowClose = document.getElementsByClassName("pd-hero-video-5-close");

    for(const mWindowLink of pdModalWindow5Link) {
        mWindowLink.addEventListener("click", toggleHeroVideo5ModalListener);
    }

    for(const mWindowClose of pdModal5WindowClose) {
        mWindowClose.addEventListener("click", toggleHeroVideo5ModalListener);
    }
}

function toggleHeroVideo5ModalListener(e) {

    // prevent the page navigating
    e.preventDefault();
    
    // get the current target and from there work out the modal window name
    const modalLink = e.currentTarget;
    // const modalNameClassList = modalName.classList[0].split("-");
    // const modalId = `pd-hero-video-${modalNameClassList[3]}-modal`;
    const modalId = modalLink.dataset.modalId;
    // const modalRef = document.getElementsByClassName(modalId)[0];
    const modalRef = document.getElementById(modalId);

    // get a reference to the video
    const modalVid = modalRef.getElementsByTagName("video")[0];
    
    if(modalRef) {
        if(modalRef.classList.contains("open")) {

            modalRef.classList.remove("open");
            modalRef.removeAttribute("style");
            modalVid.pause();

        } else {

            modalRef.classList.add("open");
            void(modalRef.offsetHeight);
            modalRef.setAttribute("style", "background: rgba(0,0,0,0.9);");
            setTimeout(() => {
                modalVid.play();
            }, 500);
            
        }
    }

}

// *** end pdHeroVideo5Modal ********************************************************************************

// *** start pdHeroVideo6Modal ********************************************************************************

var pdModalWindow6Link = [];
// var pdModalWindow = [];
var pdModal6WindowClose = [];

function initPdHeroVideo6ModalWindows() {
    
    // pdModalWindow = document.getElementsByClassName("pd-hero-video-6-modal");
    pdModalWindow6Link = document.getElementsByClassName("pd-hero-video-6-modal-link");
    pdModal6WindowClose = document.getElementsByClassName("pd-hero-video-6-close");

    for(const mWindowLink of pdModalWindow6Link) {
        mWindowLink.addEventListener("click", toggleHeroVideo6ModalListener);
    }

    for(const mWindowClose of pdModal6WindowClose) {
        mWindowClose.addEventListener("click", toggleHeroVideo6ModalListener);
    }
}

function toggleHeroVideo6ModalListener(e) {

    // prevent the page navigating
    // e.preventDefault();
    
    // get the current target and from there work out the modal window name
    const modalLink = e.currentTarget;
    // const modalNameClassList = modalName.classList[0].split("-");
    // const modalId = `pd-hero-video-${modalNameClassList[3]}-modal`;
    const modalId = modalLink.dataset.modalId;
    // const modalRef = document.getElementsByClassName(modalId)[0];
    const modalRef = document.getElementById(modalId);

    // get a reference to the video
    const modalVid = modalRef.getElementsByTagName("video")[0];
    
    if(modalRef) {
        if(modalRef.classList.contains("open")) {

            modalRef.classList.remove("open");
            modalRef.removeAttribute("style");
            modalVid.pause();

        } else {

            modalRef.classList.add("open");
            void(modalRef.offsetHeight);
            modalRef.setAttribute("style", "background: rgba(0,0,0,0.9);");
            setTimeout(() => {
                modalVid.play();
            }, 500);
            
        }
    }

}

// *** end pdHeroVideo6Modal ********************************************************************************


