var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// when you touch the drums //
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    // this.style.color = "orange";
    var buttonInnerHTML = this.innerText;
    console.log(buttonInnerHTML);
    switch (buttonInnerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        default:
            console.log("Key prssed other than w,a,s,d,j,k and l,")
            break;
    }
    buttonAnimation(buttonInnerHTML);
}

// _____________play audio using keyboard keys _______________
document.addEventListener("keydown", soundWithKeys);

function soundWithKeys(event) {
    var keyPressed = event.key;
    console.log(keyPressed);
    switch (keyPressed) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;

        default:
            // alert("Wrong key pressed.");
            console.log("Key prssed other than w,a,s,d,j,k and l,")
            break;
    }
    buttonAnimation(keyPressed);
}

//---------------- Button animation ---------------
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}

//----------------------------------------------------------
// <---I tried this --->
// function handleClick() {
//     if (this.innerText == "w") {
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     }
//     if (this.innerText == "a") {
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//     }
//     if (this.innerText == "s") {
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//     }
//     if (this.innerText == "d") {
//         var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//     }
//     if (this.innerText == "j") {
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//     }
//     if (this.innerText == "k") {
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//     }
//     if (this.innerText == "l") {
//         var audio = new Audio("sounds/kick.mp3");
//         audio.play();
//     }
// }

//<---- Method to play Audio ----> 
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// <<<<---- Another way of writing eventListener ---->>>>

// for (var i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("ahn aa.");
//     });
// }