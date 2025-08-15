window.addEventListener("load", () => {
    initYouTubeVideoButtons();
    initModalWindow();
});

let isModalOpen = false;
let pdModalWindow;
var pdVideoId;
let hasVideoScript = false;

function initYouTubeVideoButtons() {

    const ytBtns = document.getElementsByClassName('pd-watch-youtube-video');

    if(!ytBtns.length > 0) return;

    for(const btn of ytBtns) {
        btn.addEventListener("click", toggleYTModalListener);
        pdVideoId = btn.dataset.videoId;
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
        openModal();
    }
}

function openModal() {
    
    if(!pdModalWindow.classList.contains('pd-show')) {
        pdModalWindow.classList.add('pd-show');
    }
    
    // force a repaint
    void(pdModalWindow.offsetHeight);
    
    pdModalWindow.style.opacity = 1;
    
    isModalOpen = true;

    addVideoScript();
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