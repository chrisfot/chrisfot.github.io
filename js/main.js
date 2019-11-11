const intro = document.getElementById('introduction-text');
const arrowDown = document.getElementById('arrow-down');
const arrowUp = document.getElementById('arrow-up');

window.addEventListener('scroll', function() {
    if (isAnyPartOfElementInViewport(intro)) {
        arrowUp.style.display = 'none';
        arrowDown.style.display = 'block';
    } else {
        arrowUp.style.display = 'block';
        arrowDown.style.display = 'none';
    }
});

arrowDown.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('about-me');
    smoothScrollToElement(targetElement);
});

arrowUp.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.getElementById('top');
    smoothScrollToElement(targetElement);
});

/**
 * Finds out if any part of the target element is in display.
 * @param el
 * @returns {boolean}
 */
function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}

/**
 * Scroll to the given element smoothly.
 * @param el
 */
function smoothScrollToElement(el) {
    const rect = el.getBoundingClientRect();
    window.scrollTo({
        top: rect.top,
        left: rect.left,
        behavior: 'smooth'
    });
}
