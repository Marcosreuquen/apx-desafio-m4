(function () {
  cloneEl(navbar(), ".header");

  const titleEl = document.createElement("div")
  titleEl.innerHTML="<h2>Servicios</h2>";
  titleEl.className = "header__title"
  document.querySelector(".header").appendChild(titleEl)
  cloneEl(services(), ".servicesSection");
  cloneEl(footer(), ".footer");
  burgerDisplay();
})();
