¡Felicitaciones! Terminaste el módulo JavaScript y el navegador. Ahora, te proponemos que pongas en práctica todo lo que aprendiste en estos capítulos y recrees este diseño. El sitio web deberá seguir la siguiente estructura:

    Home (index.html)
        Bienvenida
        Presentación
        Mis servicios
        Formulario de contacto
    Portfolio (portfolio.html)
    Servicios (servicios.html)
    Contacto (contacto.html)

Veamos algunas pautas que tendrás que tener en cuenta para pasar el desafío:

    El diseño propone dos tamaños de pantalla distintos: mobile y desktop.
    /portfolio.html y /servicios.html deben tener el mismo diseño.
    El header, el footer y el formulario de contacto son componentes reutilizables.
    Tenés que personalizar el contenido. Reemplazá la información de Marce por la tuya. (Por ejemplo, el logo, los servicios, etc)
    El contenido de Bienvenida, Presentación, Portfolio y Servicios tiene que ser administrado desde el CMS Contenful. Deberá ser consumido con JavaScript usando Fetch.
    Para enviar el email del formulario de contacto se tiene que disparar un request HTTP (POST) a https://apx-api.vercel.app/api/utils/dwf enviando el siguiente body:

{

     "to":"tu-email-de-estudiante@gmail.com",

     "message":"mensaje a enviar"

}

    Tené en cuenta incluir el header: content-type:"application/json" en tu POST.

fetch(url, {

method: "POST",

headers: { "content-type": "application/json" },

// ...todo lo demás

})

    Subí tu sitio web a GitHub Pages.
    Dentro del archivo README.md (crealo si no lo tenés) dejá la URL de tu GitHub Page.

Para completar el diseño, veamos cómo hacer un menú hamburguesa para la versión mobile del sitio:
