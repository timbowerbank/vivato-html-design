window.addEventListener("load", () => {
    initPdHeroVideo5ModalWindows();


});

var pdModalWindowLink = [];
// var pdModalWindow = [];
var pdModalWindowClose = [];

function initPdHeroVideo5ModalWindows() {
    
    // pdModalWindow = document.getElementsByClassName("pd-hero-video-5-modal");
    pdModalWindowLink = document.getElementsByClassName("pd-hero-video-5-modal-link");
    pdModalWindowClose = document.getElementsByClassName("pd-hero-video-5-close");

    for(const mWindowLink of pdModalWindowLink) {
        mWindowLink.addEventListener("click", toggleHeroVideo5ModalListener);
    }

    for(const mWindowClose of pdModalWindowClose) {
        mWindowClose.addEventListener("click", toggleHeroVideo5ModalListener);
    }
}

function toggleHeroVideo5ModalListener(e) {

    // prevent the page navigating
    e.preventDefault();
    
    // get the current target and from there work out the modal window name
    const modalName = e.currentTarget;
    const modalNameClassList = modalName.classList[0].split("-");
    const modalId = `pd-hero-video-${modalNameClassList[3]}-modal`;
    const modalRef = document.getElementsByClassName(modalId)[0];

    // get a reference to the video
    const modalVid = modalRef.getElementsByTagName("video")[0];
    console.log(modalVid);
    
    if(modalRef) {
        if(modalRef.classList.contains("open")) {
            modalRef.classList.remove("open");
            modalRef.removeAttribute("style");
            modalVid.pause();
        } else {
            // void(dropDown.offsetHeight);
            modalRef.classList.add("open");
            void(modalRef.offsetHeight);
            modalRef.setAttribute("style", "background: rgba(0,0,0,0.9);");
            setTimeout(() => {
                modalVid.play();
            }, 500);
            
        }
    }

}