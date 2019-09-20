var intro = document.getElementById('introduction-text');
var arrowDown = document.getElementById('arrow-down');
var arrowUp = document.getElementById('arrow-up');

window.addEventListener('scroll', function() {
    if (isAnyPartOfElementInViewport(intro)) {
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
    } else {
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
    }
});

function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}
