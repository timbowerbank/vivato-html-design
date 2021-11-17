window.addEventListener("load", () => {
    initGlideSliders();


});

const COMPONENT_NAME = "data-glide";
const COMPONENT_SELECTOR = `[${COMPONENT_NAME}]`;

function initGlideSliders() {
    
    // const COMPONENT_NAME = "data-glide";
    // const COMPONENT_SELECTOR = `[${COMPONENT_NAME}]`;
  
    const components = document.querySelectorAll(COMPONENT_SELECTOR);
    
    for (let i = 0; i < components.length; i++) {

        // check for any classes where these instances need special events
        // using this for the step by step carousel
        // if(components[i].classList.contains("pd-glide-events")) {
        //     // invoke special init for this instance
        //     initStepsGlideSlider(components[i]);
        //     continue;
        // }

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


// *** initStepsGlideSliders() ***
// function initStepsGlideSlider(nSliderInstance) {

//     let glideInstanceId = nSliderInstance.id;
    
//     const options = JSON.parse(
//         nSliderInstance.getAttribute(COMPONENT_NAME || "{}")
//     );

//     let glide = new Glide(nSliderInstance, options);

//     // add events
//     glide.on('run.after', (e) => {
        
//         const currentSlider = document.getElementById(glideInstanceId);
//         const currentUl = currentSlider.getElementsByClassName("glide__slides")[0];
//         const allSlides = currentUl.children;
//         const currentSlideIndex = glide.index;
        
//         // console.log("glide index is: " + currentSlideIndex);
//         for(let i = 0; i < allSlides.length; i++) {
//             if(i === currentSlideIndex) {
//                 // add pdActive to the slide
//                 allSlides[i].classList.add("pdActive");
//                 // console.log("just added pdActive to slide: " + i);
//             } else {
//                 if(allSlides[i].classList.contains("pdActive")) {
//                     allSlides[i].classList.remove("pdActive");
//                 }
//             }
//         }

//     });

//     glide.mount();

// }

