function revealOnScroll() {
  var navbarLoaded = false;
  var reveals = document.querySelectorAll(".reveal");

  function reveal() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  // Démarrer la première animation au chargement de la page
  reveal();

  // Ajouter un écouteur de scroll pour les animations ultérieures
  window.addEventListener("scroll", reveal);
}

document.addEventListener("DOMContentLoaded", revealOnScroll);
