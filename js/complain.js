document.addEventListener("DOMContentLoaded", function() {
    const composeBox = document.querySelector('.compose_box');
    const complainBox = document.querySelector('.compose_complain_box');
    const crossIcon = document.querySelector('.cross');

    function toggleComplainBox() {
        if (complainBox.style.display === 'none' || complainBox.style.display === '') {
            complainBox.style.display = 'block';
        } else {
            complainBox.style.display = 'none';
        }
    }

    composeBox.addEventListener('click', toggleComplainBox);

    crossIcon.addEventListener('click', toggleComplainBox);
});
