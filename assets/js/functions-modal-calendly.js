document.addEventListener('DOMContentLoaded', function() {
    const calendlyButton = document.getElementById('calendly-button');
    const calendlyModal = document.getElementById('calendly-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackground = document.getElementById('modal-1-background');
    const calendlyWrapper = document.getElementById('calendly-wrapper');
    let calendlyScriptLoaded = false;
    let scrollPosition = 0;

    function initCalendlyScroll() {
        window.addEventListener("scroll", calendlyScrollListener);
    }

    function calendlyScrollListener(e) {
        if(window.scrollY > 300 && calendlyScriptLoaded === false) {
            loadCalendly();
            window.removeEventListener("scroll", calendlyScrollListener);
        }
    }

    // Function to open the modal
    function openModal() {
        scrollPosition = window.scrollY;
        calendlyModal.classList.add('pd-show');
        // fix the body
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollPosition}px`;

        // Load Calendly script if it hasn't been loaded yet
        // if (!calendlyScriptLoaded) {
        //     const calendlyWidget = document.createElement('div');
        //     calendlyWidget.className = 'calendly-inline-widget';
        //     calendlyWidget.setAttribute('data-url', 'https://calendly.com/tim-pendigital/30min');
        //     calendlyWidget.style.minWidth = '320px';
        //     calendlyWidget.style.height = '700px';

        //     const calendlyScript = document.createElement('script');
        //     calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
        //     calendlyScript.async = true;
        //     calendlyScript.addEventListener("load", () => {
        //         console.log("calendly loaded");
        //     })
            

        //     calendlyWrapper.appendChild(calendlyWidget);
        //     calendlyWrapper.appendChild(calendlyScript);

        //     calendlyScriptLoaded = true;
        // }
    }


    // *** loadCalendly() ***
    function loadCalendly() {
        // Load Calendly script if it hasn't been loaded yet
        if (!calendlyScriptLoaded) {
            const calendlyWidget = document.createElement('div');
            calendlyWidget.className = 'calendly-inline-widget';
            calendlyWidget.setAttribute('data-url', 'https://calendly.com/tim-pendigital/30min');
            calendlyWidget.style.minWidth = '320px';
            calendlyWidget.style.height = '700px';

            const calendlyScript = document.createElement('script');
            calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
            calendlyScript.async = true;           

            calendlyWrapper.appendChild(calendlyWidget);
            calendlyWrapper.appendChild(calendlyScript);

            calendlyScriptLoaded = true;
        }
    }

    // Function to close the modal
    function closeModal() {
        calendlyModal.classList.remove('pd-show');

        scrollPosition = document.body.style.top;
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo({
            left: 0,
            top: parseInt(scrollPosition || '0') * -1,
            behavior: 'instant'
        });
    }

    // Event listener for opening the modal
    calendlyButton.addEventListener('click', openModal);

    // Event listeners for closing the modal
    modalCloseBtn.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && calendlyModal.classList.contains('pd-show')) {
            closeModal();
        }
    });

    initCalendlyScroll();
});