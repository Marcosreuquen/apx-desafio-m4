(function () {
  cloneEl(navbar(), ".header");

  const titleEl = document.createElement("div");
  titleEl.innerHTML = "<h2>Servicios</h2>";
  titleEl.className = "header__title";
  document.querySelector(".header").appendChild(titleEl);
  cloneEl(services(), ".servicesSection");

  //TEMPLATE
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=services"
  )
    .then((res) => res.json())
    .then((json) => {
      const items = json.items;
      for (const i in items) {
        const services = items[i].fields;

        const container = document.querySelector(".services__container");
        const template = document.querySelector(
          "#services__item-template"
        ).content;
        const clone = template.cloneNode(true);
        clone.querySelector(".services__item-subtitle").textContent =
          services.title;
        clone.querySelector(".services__item-content").textContent =
          services.content;

        container.appendChild(clone);
      }
    })
    .then(() => {
      //SCROLL REVEAL
      ScrollReveal({ duration: 1500, reset: false });
      ScrollReveal().reveal(".services__item", { delay: 500 });
    });

  cloneEl(footer(), ".footer");

  burgerDisplay();
})();
