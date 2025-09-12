window.addEventListener('load', () => {
    initBlog3Transcription();
});


let transcriptionLink, transcriptionContent;
let transcriptionIsOpen = false;

function initBlog3Transcription() {
    // pd-transcription-link
    transcriptionLink = document.getElementsByClassName('pd-transcription-link')[0];

    // pd-blog-post-3-transcription
    transcriptionContent = document.getElementsByClassName('pd-blog-post-3-transcription')[0];

    if(transcriptionLink) {
        transcriptionLink.addEventListener('click', toggleTranscriptionListener);
        transcriptionContent.addEventListener('transitionend', transcriptionAnimationEndListener);
    }
}

function toggleTranscriptionListener(e) {
    e.preventDefault();

    if(transcriptionIsOpen) {
        // close it
        transcriptionIsOpen = false;
        
        transcriptionContent.removeAttribute("style");
        transcriptionContent.classList.add("pd-collapsing");

        transcriptionContent.setAttribute('aria-expanded', 'false');

    } else {
        // set transcriptionIsOpen
        transcriptionIsOpen = true;

        // open it
        transcriptionContent.classList.add('pd-show');

        // get height of transcription content
        const heightStr = `height:${transcriptionContent.offsetHeight}px;`;

        // add pd-collapsing
        transcriptionContent.classList.add('pd-collapsing');
        
        // force a repaint
        void(transcriptionContent.offsetHeight);
        
        // set the height
        transcriptionContent.setAttribute('style', heightStr);

        // set the aria-hidden
        transcriptionContent.setAttribute('aria-expanded', 'true');
    }

}


function transcriptionAnimationEndListener(e) {
    // remove pd-collapsing
    transcriptionContent.classList.remove('pd-collapsing');

    if(transcriptionContent.getAttribute("style")== null || transcriptionContent.getAttribute("style") == "") {
        // remove pd-show
        transcriptionContent.classList.remove('pd-show');
    }



}