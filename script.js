//toggle var
let fade_state = true;
//on btn click
function fade() {
    //get the button and div
    let div = document.getElementById("disclaimer");
    let navDisclaimer = document.getElementById("navDisclaimer");
    let btn = document.getElementById("close");
    //if faded in or out
    if (fade_state === true) {
        //triggers animation
        div.style.animation = "fade-out 0.5s forwards";
        navDisclaimer.style.animation = "fade-out 0.5s forwards"
        //sets the text
        btn.innerHTML = "Disclaimer einblenden";
        //sets fade_state
        fade_state = false;
    } else if (fade_state === false) {
        //triggers animation
        div.style.animation = "fade-in 0.5s forwards";
        navDisclaimer.style.animation = "fade-in 0.5s forwards";
        //sets the text
        btn.innerHTML = "Disclaimer ausblenden";
        //sets fade_state
        fade_state = true;
    }
}