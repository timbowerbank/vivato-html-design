window.addEventListener('load', ()=> {

    if(document.getElementsByClassName('pd-gallery-1').length > 0) {
        initGalleries();
        initGlightBox();
    }

});

const COMPONENT_NAME = "data-glide";
const COMPONENT_SELECTOR = `[${COMPONENT_NAME}]`;

function initGalleries() {

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    for (let i = 0; i < components.length; i++) {

        // continue initialising for non event type sliders
        const options = JSON.parse(
            components[i].getAttribute(COMPONENT_NAME) || "{}"
        );
    
        let glide = new Glide(
            components[i],
            options
        );
    
        glide.mount();
    }

}

// *** glightbox() ***
function initGlightBox() {

    // check t see if there is a lightbox
    // glightbox
    if(document.getElementsByClassName('glightbox').length <= 0) {
        // terminate
        return;
    }
    
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    initLightboxButtons();

}

function initLightboxButtons() {
    const buttons = document.getElementsByClassName('pd-gallery-1-btn');
    for(const btn of buttons) {
        btn.addEventListener("click", (e) => {
            const button = e.currentTarget;
            button.blur();
        });
    }
}


