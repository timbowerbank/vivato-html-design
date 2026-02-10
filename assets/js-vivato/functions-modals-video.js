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
        if(btn.dataset.playVideo === 'inline') {
            btn.addEventListener("click", handleInlineVideo);
        } else {
            btn.addEventListener("click", toggleYTModalListener);
        }
    }

}

function handleInlineVideo(e) {
    e.preventDefault();

    const btn = e.currentTarget;

    // If already loaded, do nothing
    if(btn.dataset.inlineLoaded === 'true') return;

    const videoId = btn.dataset.videoId;
    if(!videoId) return;

    const container = btn.closest('.pd-video-1-video-outer');
    if(!container) return;

    // Mark as loaded to prevent re-triggering
    btn.dataset.inlineLoaded = 'true';

    // Hide the placeholder image, brand V, and play button
    const placeholder = container.querySelector('.pd-video-1-img-placeholder');
    const brandV = container.querySelector('.pd-brand-v');

    if(placeholder) placeholder.classList.remove('pd-show');
    if(brandV) brandV.classList.remove('pd-show');
    btn.classList.remove('pd-show');

    // Create inline player container
    const playerDiv = document.createElement('div');
    const playerId = 'inlinePlayer-' + Date.now();
    playerDiv.id = playerId;
    container.appendChild(playerDiv);

    // Load YT API and create player
    ensureYTAPI(() => {
        new YT.Player(playerId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': (event) => {
                    event.target.playVideo();
                }
            }
        });
    });
}

// Central YT API loader
let ytAPILoading = false;
let ytAPICallbacks = [];

function ensureYTAPI(callback) {
    if(window.YT && window.YT.Player) {
        callback();
        return;
    }

    ytAPICallbacks.push(callback);

    if(!ytAPILoading) {
        ytAPILoading = true;
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        const existingCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
            if(existingCallback) existingCallback();
            while(ytAPICallbacks.length) {
                ytAPICallbacks.shift()();
            }
        };
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