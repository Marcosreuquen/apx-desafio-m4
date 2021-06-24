(function () {
  cloneEl(navbar(), ".header");

  const titleEl = document.createElement("div");
  titleEl.innerHTML = "<h2>Portfolio</h2>";
  titleEl.className = "header__title";
  document.querySelector(".header").appendChild(titleEl);

  //TEMPLATE
  fetch(
    "https://cdn.contentful.com/spaces/c46xwnyuulfo/environments/master/entries?access_token=QEiYcc0Jw2mqa7DQKtErqg5yrRIocdRHjwCAiyz1SMc&content_type=works"
  )
    .then((res) => res.json())
    .then((json) => {
      const assets = json.includes.Asset;
      for (let i = 0; i < assets.length; i++) {
        const element = assets[i];
        const imagen = "https:" + element.fields.file.url;
        const title = element.fields.title;
        //console.log(element);
      }

      const items = json.items;
      for (const i in items) {
        const item = items[i];
        const works = item.fields;
        const container = document.querySelector(".portfolio__works-container");
        const template = document.querySelector(
          "#portfolio__work-template"
        ).content;

        const clone = template.cloneNode(true);
        clone.querySelector(".portfolio__work-subtitle").textContent =
          works.titulo;
        clone.querySelector(".portfolio__work-content").textContent =
          works.descripcion;
        clone.querySelector(".work-link__repository").href = works.repository;
        clone.querySelector(".work-link__web").href = works.web;

        const matchedUrl = assets.filter(
          (i) => i.sys.id === works.imagen.sys.id
        );
        const workImg = "https:" + matchedUrl[0].fields.file.url;
        clone.querySelector(".portfolio__work-img").src = workImg;

        container.appendChild(clone);
      }
    })
    .then(() => {
      //SCROLL REVEAL
      ScrollReveal({ duration: 1500, reset: false });
      ScrollReveal().reveal(".portfolio__work", { delay: 500 });
    });

  cloneEl(footer(), ".footer");

  burgerDisplay();
})();
