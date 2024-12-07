const texts = [
    "Hi !" ,
    "Enter your email",
    "we will send you the password",
    "directly to your mail."
];

const delay = 100;
let textIndex = 0;

function typeWriter(text, i, typingElement) {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        setTimeout(function () {
            typeWriter(text, i + 1, typingElement);
        }, delay);
    } else {

        setTimeout(function () {
            typingElement.innerHTML = '';
            textIndex = (textIndex + 1) % texts.length;
            typeWriter(texts[textIndex], 0, typingElement);
        }, delay * 5);
    }
}

window.onload = function () {
    const typingElement = document.getElementById('typing-text');
    typeWriter(texts[textIndex], 0, typingElement);
};

async function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    try {
        const response = await fetch('db/users.json');
        const userData = await response.json();

        const user = userData.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = "student_home.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert("An error occurred during login. Please try again later.");
    }
}
