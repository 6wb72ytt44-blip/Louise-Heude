// Le bouton affiche uniquement un message : aucune donnée n'est envoyée.

const contactButton = document.querySelector("#contactButton");
const contactMessage = document.querySelector("#contactMessage");

contactButton.addEventListener("click", () => {
  contactMessage.textContent =
    "Merci pour votre intérêt ! Je serais ravie d’échanger avec vous au sujet d’une opportunité professionnelle.";

  // Indique visuellement que l'action a bien été prise en compte.
  contactButton.textContent = "Merci !";
});
