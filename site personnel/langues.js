document.addEventListener("DOMContentLoaded", function() {
    // Votre code JavaScript ici
    const translations = {
        "web": {
            "fr": "web",
            "ru": "веб",
            "en": "web"
        },
        "nom": {
            "fr": "Eric Minel",
            "ru": "Эрик Минель",
            "en": "Eric Minel"
        },
        "sousTitre": {
            "fr": "Developpement web",
            "ru": "Веб-разработка",
            "en": "Developpement web"
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
            "en": "Cereulide has been shown to inhibit the respiratory chain and lead to hepatic steatosis and a picture of fulminant hepatic failure that can be treated by liver transplantation and antibiotics directed at the responsible bacterial infection."
        },
    };
    
    var web = document.querySelector("#web");
    var cv = document.querySelector("#cv");
    var graphisme = document.querySelector("#graphisme");
    var about = document.querySelector(".about");
    var nom = document.querySelector(".nom");
    var sousTitre = document.querySelector(".sousTitre");
    
    web.innerHTML = translations.web['fr'];
    cv.innerHTML = translations.CV['fr'];
    graphisme.innerHTML = translations.graphisme['fr'];
    about.innerHTML = translations.about['fr'];
    nom.innerHTML = translations.nom['fr'];
    sousTitre.innerHTML = translations.sousTitre['fr'];
    
    document.getElementById("languageSelect").addEventListener("change", function() {
        var selectedLanguage = this.value; 
    
        web.innerHTML = translations.web[selectedLanguage];
        cv.innerHTML = translations.CV[selectedLanguage];
        graphisme.innerHTML = translations.graphisme[selectedLanguage];
        about.innerHTML = translations.about[selectedLanguage];
        
        if (selectedLanguage == "ru") {
            // Get all elements matching the selector
            var elements = document.querySelectorAll(".linksMainFlex.nom.sousTitre.about");
            
            // Check if any elements were found
            if (elements.length > 0) {
                // Loop through each element and set the font family
                elements.forEach(function(element) {
                    element.style.fontFamily = "UrbanSlavic";
                });
            }
        } else {
            var elements = document.querySelectorAll(".linksMainFlex.nom.sousTitre.about");
            element.style.fontFamily = "Rumble Brave";
            
        }
    });
});

