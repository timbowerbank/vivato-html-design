window.addEventListener("load", () => {
    initYouTubeVideoButtons();
    initModalWindow();
});

let isModalOpen = false;
let pdModalWindow;
var pdVideoId;
let hasVideoScript = false;
let previousFocusElement = null;

function initYouTubeVideoButtons() {

    const ytBtns = document.getElementsByClassName('pd-watch-youtube-video');

    if(!ytBtns.length > 0) return;

    for(const btn of ytBtns) {
        btn.addEventListener("click", toggleYTModalListener);
    }

}

function initModalWindow() {
    // get a reference to the window
    pdModalWindow = document.getElementById('pdModal');
    if(!pdModalWindow) return;

    pdModalWindow.addEventListener("click", (e) => {
        toggleYTModalListener(e);
    });
}


function toggleYTModalListener(e) {
    e.preventDefault();
    if(isModalOpen) {
        closeModal();
    } else {
        if(e.currentTarget && e.currentTarget.dataset.videoId) {
            pdVideoId = e.currentTarget.dataset.videoId;
        }
        openModal();
    }
}

function openModal() {

    previousFocusElement = document.activeElement;

    if(!pdModalWindow.classList.contains('pd-show')) {
        pdModalWindow.classList.add('pd-show');
    }

    // force a repaint
    void(pdModalWindow.offsetHeight);

    pdModalWindow.style.opacity = 1;

    isModalOpen = true;

    addVideoScript();

    if(player && typeof player.loadVideoById === 'function' && pdVideoId) {
        player.loadVideoById(pdVideoId);
    }

    const closeButton = pdModalWindow.querySelector('.pd-close-modal');
    if(closeButton) {
        closeButton.focus();
    }

    document.addEventListener('keydown', handleEscapeKey);
}

function closeModal() {

    if(pdModalWindow.classList.contains('pd-show')) {
        pdModalWindow.classList.remove('pd-show');
    }

    pdModalWindow.removeAttribute('style');
    isModalOpen = false;

    if(player) {
        player.stopVideo();
    }

    if(previousFocusElement) {
        previousFocusElement.focus();
        previousFocusElement = null;
    }

    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
    if(e.key === 'Escape' && isModalOpen) {
        closeModal();
    }
}

function addVideoScript() {
    if(hasVideoScript) return;

    const vidTag = document.createElement('script');
    vidTag.src = "/assets/js-vivato/functions-modals-video-yt.js";
    vidTag.id = "ytScript";
    const scriptTags = document.getElementsByTagName('script');
    const lastTag = scriptTags[scriptTags.length-1];

    lastTag.parentNode.insertBefore(vidTag, lastTag);
    hasVideoScript = true;
}