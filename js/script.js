
window.addEventListener("DOMContentLoaded", () => {

    const light = document.querySelector('.light');

    let lightSize = 'transparent 160px, rgba(0, 0, 0, 1) 200px)';

    window.addEventListener('mousemove', e => updatelight(e));

    window.addEventListener('mousedown', e => {

        lightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';

        updatelight(e);

    });

    window.addEventListener('mouseup', e => {

        lightSize = 'transparent 160px, rgba(0, 0, 0, 1) 200px)';

        updatelight(e);

    });

    function updatelight(e) {

        light.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${lightSize}`;

    }
});