(function () {
  cloneEl(navbar(), ".header");

  const titleEl = document.createElement("div");
  titleEl.innerHTML = "<h2>Portfolio</h2>";
  titleEl.className = "header__title";
  document.querySelector(".header").appendChild(titleEl);

  cloneEl(footer(), ".footer");

  burgerDisplay();
})();
