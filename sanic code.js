// list of correct answers
const correctAnswers = ["Sonic", "sonic", "Sonic the Hedgehog", "sonic the hedgehog", "Sanic", "sanic"];

// track spinning state for image
let isSpinning = false;

// movement interval
let movement = null;

// movement speed (ZOOooOM)
let speedX = 50;
let speedY = 50;

// movement direction
let dirX = 1;
let dirY = 1;

function checkAnswer() {
    // get the users input
    let answer = document.getElementById("txtAnswer").value
        .toLowerCase()
        .trim();

    // check if the answer is correct (it better be, i mean like c'mon, the answer is so simple)
    if (correctAnswers.includes(answer)) {
        document.getElementById("divHidden").style.display = "block";
        // play a sound when correct
        let correctSound = document.getElementById("audioCorrect");
        correctSound.volume = 0.5;
        // ensure it plays from start
        correctSound.currentTime = 0; 
        correctSound.play();
    } else {
        // play a sound when incorrect :(
        let incorrectSound = document.getElementById("audioIncorrect");
        incorrectSound.volume = 0.5;
        // again to play from start
        incorrectSound.currentTime = 0; 
        incorrectSound.play();
        alert("ur 2 slow");
    }
}

function toggleSpin() {
    let spinImg = document.getElementById("imgSpin");
    let audio = document.getElementById("audioSpin");

    if (isSpinning === false) {
        // start and stop the fasts
        spinImg.classList.add("spin");

        // very fast spin speed >:)
        spinImg.style.animationDuration = "0.1s";

        // audio volume (VERY LOW OTHERWISE UR EAR WILL DIE)
        audio.volume = 0.2;
        audio.play();

        startBounce();

        // start screen shake (stack overflow carried)
        document.body.classList.add("shake");

        isSpinning = true;
    } else {
        // pause the image and audio when clicked again
        spinImg.classList.remove("spin");
        audio.pause();

        stopBounce();

        // stop screen shake
        document.body.classList.remove("shake");

        isSpinning = false;
    }
}

// possibly best thing ive done with coding, very cool (big thabnks stack overflow)
function startBounce() {
    let img = document.getElementById("imgSpin");

    movement = setInterval(function () {
        let x = img.offsetLeft;
        let y = img.offsetTop;

        let maxX = window.innerWidth - img.width;
        let maxY = window.innerHeight - img.height;

        // its very cool and will bounce off walls (again big thanks u to stack overflow)
        if (x <= 0 || x >= maxX) {
            dirX *= -1;
        }

        if (y <= 0 || y >= maxY) {
            dirY *= -1;
        }

        img.style.left = (x + speedX * dirX) + "px";
        img.style.top  = (y + speedY * dirY) + "px";

    }, 30); // lower = faster movement
}

function stopBounce() {
    clearInterval(movement);
}
