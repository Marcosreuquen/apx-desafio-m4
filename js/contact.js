(function () {
  cloneEl(navbar(), ".header");
  cloneEl(contact(), ".contactSection");
  document.querySelector(".contact__title").textContent= "Contacto"
  cloneEl(footer(), ".footer");
  burgerDisplay();
})();
