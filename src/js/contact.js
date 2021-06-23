(function () {
  cloneEl(navbar(), ".header");
  cloneEl(contact(), ".contactSection");
  document.querySelector(".contact__title").textContent = "Contacto";
  cloneEl(footer(), ".footer");
  burgerDisplay();

  const formEl = document.querySelector(".contact__form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.time = new Date(event.timeStamp * 1000);
    console.log({ value });
  });
})();
