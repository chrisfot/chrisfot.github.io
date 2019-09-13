import 'normalize.css';
import './scss/style.scss';

function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

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
