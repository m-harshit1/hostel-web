// Select elements
let intro = document.getElementsByClassName('intro');
let logo = document.getElementsByClassName('logo-header');
let logoimg = document.getElementsByClassName('logo');

// Log elements to verify they exist
console.log(intro);
console.log(logo);
console.log(logoimg);

window.addEventListener('DOMContentLoaded', () => {
    // Ensure there are elements to manipulate
    if (logoimg.length > 0) {
        // Add the 'active' class to the logo image after 400ms
        setTimeout(() => {
            logoimg[0].classList.add('active');
        }, 400);

        // Fade out the logo images after 500ms
        setTimeout(() => {
                setTimeout(() => {
                    logoimg[0].classList.remove('active');
                    logoimg[0].classList.add('fade');
                }, 300); // Stagger animation by 300ms for each image
            },1000);

            // After all logos fade, hide the intro screen
            setTimeout(() => {
                if (intro.length > 0) {
                    intro[0].classList.add('fade');
                }
            }, logoimg.length * 300 + 500); // Wait for all logos to fade
    } else {
        console.error("No elements with the class 'logo' found.");
    }

    setTimeout(() => {
        intro[0].style.top = '-100vh';
    }, 2300);
});
