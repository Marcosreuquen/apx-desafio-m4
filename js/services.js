(function () {
  cloneEl(navbar(), ".header");
  cloneEl(services(), ".servicesSection");
  cloneEl(footer(), ".footer");
  burgerDisplay();
  document.querySelector(".welcome__title").textContent = "Servicios";
})();
