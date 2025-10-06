window.addEventListener('load', () => {
    initModalForm1();
});

let modalForm1, modalForm1Btn;
let modalForm1OpenBtns = [];
let isModalForm1Open = false;
let scrollPositionModalForm1 = 0;
let previousActiveElement = null;

function initModalForm1() {
    modalForm1 = document.getElementById('pdLandingModal');
    
    if(!modalForm1) {
        // terminate
        return;
    }
    

    modalForm1Btn = document.getElementById('pdLandingCloseModal');
    modalForm1OpenBtns = document.getElementsByClassName('pd-landing-modal-btn');

    // add event listeners to open the modal
    if(modalForm1OpenBtns.length > 0) {
        for(let i = 0; i < modalForm1OpenBtns.length; i++) {
            modalForm1OpenBtns[i].addEventListener('click', openModalForm1);
        }
    }

    // add event listeners to close the modal
    if(modalForm1Btn) {
        modalForm1Btn.addEventListener('click', closeModalForm1);
    }   
    
    modalForm1.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleEscapeKey);
    


}

function openModalForm1(e) {
    e.preventDefault();

    if(isModalForm1Open) {
        return;
    }

    // store the element that triggered the modal
    previousActiveElement = document.activeElement;

    scrollPositionModalForm1 = window.scrollY;

    // freeze the body
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionModalForm1}px`;
    document.body.style.width = '100%'; 
    document.body.style.overflow = 'hidden';

    // open the modal window
    modalForm1.classList.add('pd-show');

    // force a repaint in order for the transition to work
    void(modalForm1.offsetHeight);

    // set the opacity
    modalForm1.style.opacity = '1';

    // set the boolean
    isModalForm1Open = true;

    // set focus to close button for accessibility
    if(modalForm1Btn) {
        modalForm1Btn.focus();
    }

}

function closeModalForm1() {
    if(isModalForm1Open) {
        // lets close it

        // unfreeze the body
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        modalForm1.style.opacity = '';

        // remove pd-show
        modalForm1.classList.remove('pd-show');

        // Restore scroll position
        window.scrollTo({
            left: 0,
            top: scrollPositionModalForm1,
            behavior: 'instant'
        });

        // set the boolean
        isModalForm1Open = false;

        // restore focus to the element that opened the modal
        if(previousActiveElement) {
            previousActiveElement.focus();
            previousActiveElement = null;
        }

    }

}

function handleModalClick(e) {
    // Only close if clicking the modal backdrop itself, not the form content
    if (e.target === modalForm1) {
        closeModalForm1(e);
    }
}

function handleEscapeKey(e) {
    // Close modal when escape is pressed and modal is open
    if (e.key === 'Escape' && isModalForm1Open) {
        closeModalForm1(e);
    }
}