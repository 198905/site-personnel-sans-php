var displayWeb = document.querySelector('#web');
var displayCv = document.querySelector('#cv');
var displayGraph= document.querySelector('#graphisme');
var divWeb = document.querySelector('#webPart');
var divCv = document.querySelector('#cvPart');
var divGraph = document.querySelector('#graphPart');
function toggleDisplay(element) {
    const style = window.getComputedStyle(element);
    const currentDisplay = style.getPropertyValue('display');
    element.style.display = currentDisplay === 'none' ? 'block' : 'none';
}

displayWeb.addEventListener('click', function (event) {
    event.preventDefault();
    toggleDisplay(divWeb);
});

displayCv.addEventListener('click', function (event) {
    event.preventDefault();
    toggleDisplay(divCv);
});

displayGraph.addEventListener('click', function (event) {
    event.preventDefault();
    toggleDisplay(divGraph);
});
