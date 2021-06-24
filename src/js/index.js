(function () {
  //Welcome
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=aboutme"
  )
    .then((res) => res.json())
    .then((json) => {
      const sobreMi = json.items[0].fields;

      document.querySelector(".about-me__title").textContent = sobreMi.title;
      document.querySelector(".about-me__content").textContent =
        sobreMi.content;
    });

  //COMPONENTS
  cloneEl(navbar(), ".header");
  cloneEl(contact(), ".contactSection");
  cloneEl(services(), ".servicesSection");
  cloneEl(footer(), ".footer");

  //TEMPLATE
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=services"
  )
    .then((res) => res.json())
    .then((json) => {
      const items = json.items;
      for (const i in items) {
        const item = items[i];
        const services = item.fields;

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
      ScrollReveal().reveal(".services__item", { delay: 500 });
    });

  //BURGER
  burgerDisplay();
  //SEND MAILS
  sendMail();

  //SCROLL REVEAL
  ScrollReveal({ duration: 1200, reset: false });
  ScrollReveal().reveal(".about-me__title", { delay: 500 });
  ScrollReveal().reveal(".about-me__img", { delay: 500 });
  ScrollReveal().reveal(".about-me__content", { delay: 500 });
  ScrollReveal().reveal(".services__title", { delay: 500 });
  ScrollReveal().reveal(".contact__title", { delay: 500 });
  ScrollReveal().reveal(".contact__form", { delay: 500 });
  ScrollReveal().reveal(".footer__logo", { delay: 500 });
  ScrollReveal().reveal(".social__item", { delay: 500 });
  //TYPED
  var typed = new Typed(".welcome__title", {
    strings: ["Hola, <br> Soy Marcos."],
    typeSpeed: 120,
    loop: Infinity,
  });
})();
