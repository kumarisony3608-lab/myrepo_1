const words = [
    "Front-End Developer",
    "Web Developer",
    "HTML | CSS | JavaScript",
    "Looking for Internship"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        isDeleting = true;
        speed = 1500;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();