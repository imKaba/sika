const textElement = document.getElementById('text');
const texts = [
    "Business Development",
    "Research and Admin",
    "Presentation Design",
    "UX/UI Design",
    "Photography"
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Adjust the typing speed here
    } else {
        setTimeout(eraseText, 2000); // Wait before erasing the text
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 30); // Adjust the erasing speed here
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 1000); // Wait before typing the next text
    }
}

// Start the animation
typeText();



                
const burger = document.getElementById("burger");
const menu = document.querySelector("ul.navbar");

burger.addEventListener("click", function () {
    menu.classList.toggle("menu-opened");
});
