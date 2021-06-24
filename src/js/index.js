(function () {
  //Welcome
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc"
  )
    .then((res) => res.json())
    .then((json) => {
      const items = json.items;

      for (const i in items) {
        const type = items[i].sys.contentType.sys.id;
        if (type === "aboutme") {
          const sobreMi = items[i].fields;
          document.querySelector(".about-me__title").textContent =
            sobreMi.title;
          document.querySelector(".about-me__content").textContent =
            sobreMi.content;
        }
      }
    });

  //COMPONENTS
  cloneEl(navbar(), ".header");
  cloneEl(contact(), ".contactSection");
  cloneEl(services(), ".servicesSection");
  cloneEl(footer(), ".footer");

  //TEMPLATE
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc"
  )
    .then((res) => res.json())
    .then((json) => {
      /*const assets = json.includes.Asset;
      for (let i = 0; i < assets.length; i++) {
        const element = assets[i];
        const imagen = "https:" + element.fields.file.url;
        const title = element.fields.title;
      }*/

      const items = json.items;
      for (const i in items) {
        const item = items[i];
        const type = item.sys.contentType.sys.id;
        if (type === "services") {
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
      }
    });

  //BURGER
  burgerDisplay();
  //SEND MAILS
  sendMail();

  //SCROLL REVEAL
  ScrollReveal({ duration: 1000, reset: false });
  ScrollReveal().reveal(".about-me__title", { delay: 500 });
  ScrollReveal().reveal(".about-me__img", { delay: 500 });
  ScrollReveal().reveal(".about-me__content", { delay: 500 });
  ScrollReveal().reveal(".services__title", { delay: 500 });
  ScrollReveal().reveal(".services__item", { delay: 500 });
  ScrollReveal().reveal(".contact__title", { delay: 500 });
  ScrollReveal().reveal(".form__label", { delay: 500 });
  ScrollReveal().reveal(".form__button-submit", { delay: 500 });
  ScrollReveal().reveal(".footer__logo", { delay: 500 });
  ScrollReveal().reveal(".social__item", { delay: 500 });
  //TYPED
  var typed = new Typed(".welcome__title", {
    strings: ["Hola, <br> Soy Marcos."],
    typeSpeed: 120,
    loop: Infinity,
  });
})();
