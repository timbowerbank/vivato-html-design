window.addEventListener('load', () => {
    const pdSimpleCards = document.getElementsByClassName('pd-cards-24');

    if(pdSimpleCards.length > 0) {
        initSimpleCards24();
    }
});

let pdCards24;

// window resize
var resizeSimpleCardsTimer;
window.addEventListener("resize", resizeSimpleCardsListener);
function resizeSimpleCardsListener(e) {
 screenWidth = window.innerWidth;

 clearTimeout(resizeSimpleCardsTimer);

 resizeSimpleCardsTimer = setTimeout(()=> {
    initSimpleCards24();
 }, 250);

}

function initSimpleCards24() {

    pdCards24 = document.querySelectorAll('.pd-cards-24');

    for(const element of pdCards24) {
        equaliseHeaderHeightSimpleCards24(element);
    }

}

function equaliseHeaderHeightSimpleCards24(nEl) {
    const cards = nEl.getElementsByClassName('pd-cards-24-card-outer');

    let maxHeight = 0;

    // reset style attr
    for(const card of cards) {
        const header = card.querySelector('header');
        header.removeAttribute('style');
    }

    void(cards[0].offsetHeight);

        // only perform this operation if cards not stacked
    if(window.innerWidth > 767) {
        for(const card of cards) {
            const header = card.querySelector('header');
            maxHeight = header.offsetHeight > maxHeight ? header.offsetHeight : maxHeight;
        }
    
        const headerStr = `height: ${maxHeight}px;`;
    
        for(const card of cards) {
            const header = card.querySelector('header');
            header.setAttribute('style', headerStr);
        }
    }

}