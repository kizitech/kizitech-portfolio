const loaderContainer = document.querySelector('#container');

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
    "Precision",
    "Creativity",
    "Collaboration",
    "Interactivity",
    "Innovation"
];

// Bridging Creativity and Technology for Stunning Designs and Seamless Experiences..
const morphTime = 1;
const cooldownTime = 0.4;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(3 / fraction - 3, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 1) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(3 / fraction - 3, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 15) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

setTimeout(() => {
    loaderContainer.style.transition = "opacity 1s";
    loaderContainer.style.opacity = "0";

    setTimeout(() => {
        loaderContainer.style.display = "none";
    }, 1000);
}, 5000);