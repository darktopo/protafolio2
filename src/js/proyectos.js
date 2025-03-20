const togglebtn = document.querySelector('#menu-toggle')
const menu = document.querySelector('#menu')
const contenido = document.querySelector('#contenido')
const proy = [
    {
        titulo: "Página Personal",
        descripcion: `Esta imagen muestra el diseño de una página personal, donde presento información personal, habilidades e intereses. Con un estilo retro y colores llamativos, la página incluye una introducción destacada con el nombre, una sección "Sobre mí" con detalles personales y una lista de habilidades. Además, cuenta con fotografías representativas, reflejando un diseño amigable y claro para los visitantes.`,
        imagen: "./src/img/b.png",
        url: "https://magnificent-duckanoo-34e401.netlify.app/"
    },
    {
        titulo: `Proyecto: "El Arte de Comer Bien"`,
        descripcion: `Este diseño web representa la página de inicio de un restaurante llamado "El Arte de Comer Bien", destacando una experiencia gastronómica única. Con una estética elegante y moderna, la página combina colores oscuros y tonos neutros para transmitir sofisticación y calidez.`,
        imagen: "./src/img/c.png",
        url: "https://illustrious-rolypoly-c75a0a.netlify.app/"
    },
    {
        titulo: `Proyecto: Registro de Productos Alimenticios`,
        descripcion: `Este diseño web presenta un formulario de registro de productos alimenticios, facilitando la gestión de inventario mediante la recolección de datos clave como nombre del producto, precio, categoría y descripción.`,
        imagen: "./src/img/d.png",
        url: "https://fanciful-parfait-d9b5f8.netlify.app/"
    },
]


togglebtn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
})


ima(proy, contenido);
function ima(array, element) {
    element.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const arra = array[i];
        const template = `
            <div class="cont_1_1">
                <a href="${arra.url}"><img src="${arra.imagen}" alt=""></a>
                <div class="desc">
                    <h2>${arra.titulo}</h2>
                    <p>${arra.descripcion}</p>
                </div>
            </div>
            `
        element.innerHTML += template;
    }
}

