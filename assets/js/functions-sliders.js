window.addEventListener("load", () => {
    initGlideSliders();


});

function initGlideSliders() {
    
    const COMPONENT_NAME = "data-glide";
    const COMPONENT_SELECTOR = `[${COMPONENT_NAME}]`;
  
    const components = document.querySelectorAll(COMPONENT_SELECTOR);
    
    for (let i = 0; i < components.length; i++) {
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

