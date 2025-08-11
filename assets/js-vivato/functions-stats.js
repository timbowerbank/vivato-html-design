window.addEventListener("load", () => {

    initStatElements1();


});

// *** isStatInViewPort1() ***
function isStatInViewPort1(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top < (window.innerHeight - 180) && rect.bottom >= 0);
}
  
  

var statElements1;

function initStatElements1() {
    if(document.getElementsByClassName('pd-specials-stats-1-stat-wrapper') === null || document.getElementsByClassName('pd-specials-stats-1-stat-wrapper').length <= 0) {
        // terminate
        return;
    }

    // get all elements with the class animation-element
    statElements1 = document.getElementsByClassName("pd-specials-stats-1-stat-wrapper");

    // add a scroll listener to the document
    document.addEventListener("scroll", onScrollStatListener);

}
  
function onScrollStatListener(e) {
    // loop through all elements in the animationElements array
    for(const statItem of statElements1) {
      if(isStatInViewPort1(statItem)) {
        // invoke animateStat1 but check to see if it hasn't been animated yet
        if(!statItem.classList.contains("in-view")) {
            initTheStat1(statItem);
        }
        
        // add class in-view, this will trigger some CSS based animation
        statItem.classList.add("in-view");
           
      } else {
        // do nothing!
      }
    }
}

function initTheStat1(el) {

    const statOuter = el;
    const statWrapper = statOuter.getElementsByClassName("pd-specials-stats-1-text-outer")[0];
    const stat = statWrapper.getElementsByTagName("span")[0];
    
    // get the width, set the width
    const statWidth = stat.offsetWidth;
    const statWidthStr = statWidth.toString() + "px";
    stat.style.display = "inline-block";
    stat.style.width = statWidthStr;
    stat.style.opacity = 1;
    stat.style.textAlign = "center";
    stat.innerHTML = stat.dataset.statTypePre + "0" + stat.dataset.statTypePost;
    
    // animate the stat
    animateStat1(stat, 0, stat.dataset.statValue, stat.dataset.statTime, stat.dataset.statTypePre, stat.dataset.statTypePost);

}


function animateStat1(obj, initVal, lastVal, duration, preChar, postChar) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable

    let currentTime = Date.now();

    //pass the current timestamp to the step function

    const step = (currentTime ) => {

    //if the start time is null, assign the current time to startTime

        if (!startTime) {
        startTime = currentTime ;
        }

    //calculate the value to be used in calculating the number to be displayed

        const progress = Math.min((currentTime  - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
        const progressVal = Math.floor(progress * (lastVal - initVal) + initVal);
        const progressAsStr = preChar + progressVal.toString() + postChar;
        obj.innerHTML = progressAsStr;

    //checking to make sure the counter does not exceed the last value(lastVal)

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}

  