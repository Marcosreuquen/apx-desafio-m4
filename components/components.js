function cloneEl(HTMLtext, section) {
  let El = document.createElement("null");
  const parent = document.querySelector(section);
  El.innerHTML = HTMLtext;
  if (El.tagName === "null" || El.tagName === "NULL") {
    parent.appendChild(El.firstElementChild);
  } else {
    parent.appendChild(El);
  }
}

function services() {
  return `
  <div class="services">
  <h2 class="services__title">Mis servicios</h2>
  <div class="services__container">
    <template id="services__item-template">
      <div class="services__item">
        <img class="services__item-img" src="./assets/pc.svg" alt="" />
        <h3 class="services__item-subtitle">Front-end Development</h3>
        <p class="services__item-content">
          Desarrollo web front-end y maquetado con HTML, CSS y Javascript,
          sitios responsive design siguiendo el principio de Mobile First.
        </p>
      </div>
    </template>
  </div>`;
}

function contact() {
  return `
  <div class="contact">
  <h2 class="contact__title">Escribime</h2>
  <form class="contact__form">
    <label class="form__label-name form__label">
      <span>NOMBRE</span>
      <input
        type="text"
        name="name"
        class="form__input form__input-name"
      />
    </label>
    <label class="form__label-email form__label">
      <span>EMAIL</span>
      <input
        type="email"
        name="email"
        class="form__input form__input-email"
      />
    </label>
    <label class="form__label-message form__label">
      <span>MENSAJE</span>
      <textarea
        name="message"
        class="form__input-message"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <button class="form__button-submit">Enviar</button>
  </form>
</div>`;
}

function navbar() {
  return `
  <div class="header__navbar">
    <a href="./index.html">
      <img src="./assets/logo-marcos.png" alt="" class="navbar__logo" />
    </a>
    <div class="navbar__burger">
      <svg viewBox="0 0 100 80" width="40" height="40" fill="whitesmoke">
        <rect width="100" height="10" rx="8"></rect>
        <rect y="30" width="100" height="10" rx="8"></rect>
        <rect y="60" width="100" height="10" rx="8"></rect>
      </svg>
    </div>

    <nav class="navbar__links">
      <a href="./portfolio.html" class="navbar__links-item">Portafolio</a>
      <a href="./services.html" class="navbar__links-item">Servicios</a>
      <a href="./contact.html" class="navbar__links-item">Contacto</a>
    </nav>
  </div>
  `;
}

function footer() {
  return `
  <div class="footer__social">
    <img src="./assets/logo-marcos.png" alt="" class="footer__logo" />
    <nav class="social__nav">
      <a href="https://www.instagram.com/marcosreuquen" class="social__item">
        <p class="social__label">Instagram</p>
        <img src="./assets/ig.svg" alt="" class="social__logo" />
      </a>
      <a href="https://www.linkedin.com/in/marcos-reuquen-diaz" class="social__item">
        <p class="social__label">Linkedin</p>
        <img src="./assets/in.svg" alt="" class="social__logo" />
      </a>
      <a href="https://github.com/Marcosreuquen" class="social__item">
        <p class="social__label">Github</p>
        <img src="./assets/gh.svg" alt="" class="social__logo" />
      </a>
    </nav>
  </div>`;
}
function burgerDisplay() {
  const burgerEl = document.querySelector(".navbar__burger");
  const ventanaEl = document.querySelector(".navbar__links");

  burgerEl.addEventListener("click", () => {
    document.querySelector(".header__navbar").style = "position: initial";
    ventanaEl.style.display = "flex";
  });
  ventanaEl.addEventListener("click", () => {
    document.querySelector(".header__navbar").style = "";
    ventanaEl.style.display = "";
  });
}

function sendMail() {
  const formEl = document.querySelector(".contact__form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.time = new Date(event.timeStamp * 1000);
    const mensaje = `
    Enviado por: ${value.name};
    con fecha: ${value.time};
    mensaje:
    ${value.message};
    responder a: ${value.email}
    `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        to: "marcosreuquendiaz@gmail.com",
        message: mensaje,
      }),
    })
      .then((res) => {
        alert("¡Gracias! Te responderé tan pronto como me sea posible.");
        document.querySelector(".form__input-name").value = "";
        document.querySelector(".form__input-email").value = "";
        document.querySelector(".form__input-message").value = "";
      })
      .catch((err) => {
        alert("¡Ouch! Parece que algo salió mal. Por favor, intentá de nuevo.");
      });
  });
}
