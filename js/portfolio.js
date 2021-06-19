(function () {
  cloneEl(navbar(), ".header");
  document.querySelector(".welcome__title").textContent = "Portfolio";
  cloneEl(services(), ".portfolioSection");
  cloneEl(footer(), ".footer");
  burgerDisplay();
})();
