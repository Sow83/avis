// Données locales
const reviews = [
    {
        id: 1,
        img: "images/personne-1.png",
        author: "Charlotte Dubois",
        job: "Développeuse back end",
        text: "Et quoniam inedia gravi adflictabantur, locum petivere Paleas nomine, vergentem in mare, valido muro firmatum, ubi conduntur nunc usque commeatus distribui militibus omne latus Isauriae defendentibus."
    },
    {
        id: 2,
        img: "images/personne-2.png",
        author: "Julien Robert",
        job: "Développeur front end",
        text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
    },
    {
        id: 3,
        img: "images/personne-3.png",
        author: "Fatou Camara",
        job: "Responsable Marketing",
        text: "Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id."
    },
    {
        id: 4,
        img: "images/personne-4.png",
        author: "Laura Roux",
        job: "Chef de projet web",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta."
    }
]

// Sélection des éléments requis
const img = document.getElementById("person-img-js");
const author = document.getElementById("author-js");
const job = document.getElementById("job-js");
const text = document.getElementById("text-js");

const nextChevron = document.getElementById("right-chevron-js");
const prevChevron = document.getElementById("left-chevron-js");
const randomBtn = document.getElementById("btn-random-js");

// Chargement de la page
window.addEventListener("DOMContentLoaded", function () {
    showPersonitems();
});
// Affiche les éléments de la personne
var currentItem = 0; // Element de départ du tableau reviews, l'indice zéro se charge
function showPersonitems() {
   img.src = reviews[currentItem].img;
   author.textContent = reviews[currentItem].author;
   job.textContent = reviews[currentItem].job;
   text.textContent = reviews[currentItem].text;
}
//Montre la personne suivante
nextChevron.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPersonitems();  
    clearInterval(intervalReviews); //Dès que l'on clique sur le chevron le défilement (slider) s'arrête
});
//Montre la personne précédente
prevChevron.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPersonitems();  
    clearInterval(intervalReviews); 

});
//Montre une personne aléatoirement
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPersonitems();  
  clearInterval(intervalReviews); 
});
// fait l'effet de défilement (slider)
var intervalReviews = setInterval(() => {
    currentItem++;
     if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPersonitems(); 
}, 5000);
