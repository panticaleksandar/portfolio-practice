let menuBtn = document.querySelector('.icon');


menuBtn.addEventListener('click', showDisplay);

function showDisplay() {
    let links = document.querySelector('#myLinks'); 

    if (links.style.display === 'none') {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }
}