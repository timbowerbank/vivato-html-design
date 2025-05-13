window.addEventListener('load', ()=> {

    if(document.getElementsByClassName('pd-gallery-1').length > 0) {
        initGalleries();
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