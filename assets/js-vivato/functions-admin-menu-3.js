// load event on the window object
window.addEventListener("load", () => {

    initAdminMenu3();
    

});

// window.addEventListener("orientationchange", () => {

//     adminMenu3ScreenResize();
    

// });

var resizeTimerAdminMenu3;
window.addEventListener("resize", resizeListenerAdminMenu3);
function resizeListenerAdminMenu3(e) {
    clearTimeout(resizeTimerAdminMenu3);

    resizeTimerPeople = setTimeout(function() {
        
        adminMenu3ScreenResize();


    }, 250);

}


var adminMenu3Outer;
var adminMenu3ScreenWidth;
var adminMenu3Overlay;

function initAdminMenu3() {

    adminMenu3Outer = document.getElementsByClassName('pd-admin-page-menu-3')[0];
    adminMenu3ScreenWidth = window.innerWidth;

    adminMenu3Overlay = document.getElementsByClassName('pd-admin-page-menu-3-content-overlay')[0];
    adminMenu3Overlay.addEventListener("click", toggleAdminMenu3);

}

function toggleAdminMenu3() {
    // if mobile, and closed then open
    if(adminMenu3ScreenWidth < 992) {
        // is mobile
        if(adminMenu3Outer.classList.contains('pd-open')) {
            // remove pd-open
            adminMenu3Outer.classList.remove('pd-open');
        } else {
            // add pd-open
            adminMenu3Outer.classList.add('pd-open');
        }
    }

    if(adminMenu3ScreenWidth > 991) {
        // is desktop
        if(adminMenu3Outer.classList.contains('pd-close')) {
            // remove pd-close
            adminMenu3Outer.classList.remove('pd-close');
        } else {
            // add it
            adminMenu3Outer.classList.add('pd-close');
        }


    }


}


function adminMenu3ScreenResize() {
    // get the new screen width
    adminMenu3ScreenWidth = window.innerWidth;

    // reset to default
    // i.e. remove pd-close and pd-open
    if(adminMenu3Outer.classList.contains('pd-open')) {
        // remove pd-open
        adminMenu3Outer.classList.remove('pd-open');

    }

    if(adminMenu3Outer.classList.contains('pd-close')) {
        // remove pd-close
        adminMenu3Outer.classList.remove('pd-close');
    }



}

