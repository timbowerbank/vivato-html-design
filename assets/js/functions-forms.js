window.addEventListener("load", ()=> {

    initForm1HeroContactPanel();

});

window.addEventListener("orientationchange", () => {

    setForm1ContactPanelHeight();

});

var resizeTimerForms;
window.addEventListener("resize", resizeListenerForms);
function resizeListenerForms(e) {
    clearTimeout(resizeTimerForms);

    resizeTimerForms = setTimeout(function() {
        setForm1ContactPanelHeight();

    }, 250);

}

var form1Btns = [];

function initForm1HeroContactPanel() {
    // .pd-forms-1-button
    form1Btns = document.getElementsByClassName("pd-forms-1-button");

    for(const btn of form1Btns) {
        btn.addEventListener("click", toggleForm1HeroButtons);
    }

    // set the height of the panels
    setForm1ContactPanelHeight();

}

function setForm1ContactPanelHeight() {
    const panels = document.getElementsByClassName("pd-forms-1-contact-panel");
    let panelHeight = 0;
    for(const panel of panels) {
        // set the style height to auto
        panel.style.height = "auto";

        // get the highest height
        panelHeight = panel.offsetHeight > panelHeight ? panel.offsetHeight : panelHeight;
        
    }


    for(const panel of panels) {

        panel.style.height = panelHeight + "px";
    }

}

function toggleForm1HeroButtons(e) {
    const button = e.currentTarget;
    const buttonId = button.id;
    const buttonPanelId = button.dataset.panelId;
    const buttonPanel = document.getElementById(buttonPanelId);

    // loop
    for(const btn of form1Btns) {
        if(btn.id === buttonId) {
            // add pd-active and change the aria-selected attribute
            btn.classList.add("pd-active");
            btn.setAttribute("aria-selected", "true");

            // add pd-active to the class list for the panel
            buttonPanel.classList.add("pd-active");
            buttonPanel.setAttribute("aria-hidden", "false");

            // set the style of the panel
            buttonPanel.style.opacity = 1;

        } else {
            // remove pd-active from both btn and its associated panel
            btn.classList.remove("pd-active");
            btn.setAttribute("aria-selected", "false");
            const panelId = btn.dataset.panelId;
            const panel = document.getElementById(panelId);
            panel.classList.remove("pd-active");
            panel.setAttribute("aria-hidden", "true");

            panel.style.opacity = 1;

        }
    }
}