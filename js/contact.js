(function () {
  cloneEl(navbar(), ".header");
  document.querySelector(".welcome__title").textContent = "Contacto";
  cloneEl(contact(), ".contactSection");
  cloneEl(footer(), ".footer");
  burgerDisplay();
})();
