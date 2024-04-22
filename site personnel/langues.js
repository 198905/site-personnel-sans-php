document.addEventListener("DOMContentLoaded", function() {
    // Votre code JavaScript ici
const translations = {
    "web": {
        "fr": "web",
        "ru": "веб",
        "en": "web"
    },
    "CV": {
        "fr": "CV",
        "ru": "резюме",
        "en": "resume"
    },
    "graphisme": {
        "fr": "graphisme",
        "ru": "графика",
        "en": "graphics"
    },
    "about": {
        "fr": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tenetur voluptas eaque, aut ipsam a, itaque distinctio dolorum mollitia exercitationem beatae minima praesentium, suscipit rerum provident eveniet incidunt consequuntur voluptatem omnis.",
        "ru": "текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский текст по-русский ",
        "en": "Cereulide, the emetic toxin of Bacillus cereus, has been shown to inhibit the respiratory chain and lead to hepatic steatosis and a picture of fulminant hepatic failure that can be treated by liver transplantation and antibiotics directed at the responsible bacterial infection."
    },
};
var web = document.querySelector("#web");
var cv = document.querySelector("#cv");
var graphisme = document.querySelector("#graphisme");
var about = document.querySelector(".about");

web.innerHTML = translations.web['fr'];
cv.innerHTML = translations.CV['fr'];
graphisme.innerHTML = translations.graphisme['fr'];
about.innerHTML = translations.about['fr'];

document.getElementById("languageSelect").addEventListener("change", function() {
    var selectedLanguage = this.value; 

    web.innerHTML = translations.web[selectedLanguage];
    cv.innerHTML = translations.CV[selectedLanguage];
    graphisme.innerHTML = translations.graphisme[selectedLanguage];
    about.innerHTML = translations.about[selectedLanguage];
    if (selectedLanguage == "ru") {
        // Loop through all elements and set the font family
        document.querySelectorAll("*").forEach(function(element) {
            element.style.fontFamily = "UrbanSlavic";
        });
    }
    else if (selectedLanguage != "ru") {
        // Loop through all elements and set the font family
        document.querySelectorAll("*").forEach(function(element) {
            element.style.fontFamily = "Rumble Brave";
        });
    }
});
});
var displayWeb = document.querySelector('#web');
var displayCv = document.querySelector('#cv');
var displayGraph= document.querySelector('#graphisme');
var divWeb = document.querySelector('.webPart');
var divCv = document.querySelector('.cvPart');
var divGraph = document.querySelector('.graphPart');
displayWeb.addEventListener('click', function (e) {
    event.preventDefault();
    divWeb.style.display = 'flex';
   });
displayCv.addEventListener('click', function (e) {
    event.preventDefault();
    divCv.style.display = 'flex';
   });
displayGraph.addEventListener('click', function (e) {
    event.preventDefault();
    divGraph.style.display = 'flex';
   });
