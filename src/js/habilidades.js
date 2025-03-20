const card = document.querySelector("#cont_cards")
const extra = document.querySelector("#extra")
const togglebtn = document.querySelector('#menu-toggle')
const menu = document.querySelector('#menu')
const skillCards = [
    {
        name: "Java",
        icon: "./src/img/java.png",

    },
    {
        name: "Json",
        icon: "./src/img/json.png",

    },
    {
        name: "HTML",
        icon: "./src/img/html.png",

    },
    {
        name: "CSS",
        icon: "./src/img/css.png",

    },
    {
        name: "JavaScript",
        icon: "./src/img/js.png",

    },
    {
        name: "ELectronica",
        icon: "./src/img/chip.png",

    },
    {
        name: "Mobiles",
        icon: "./src/img/disp.png",

    },
    {
        name: "mobiles",
        icon: "./src/img/disp-elect.png",

    }
]

categoryCards(skillCards, card)
extraIcons(skillCards, extra)


function categoryCards(items, element) {
    element.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const template = `
            <div class="cards">
                <img src="${item.icon}" class="card">
            </div>
            `;
        element.innerHTML += template
    }

}
function extraIcons(items, element) {
    element.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const template = `
        <div><img src="${item.icon}" alt="${item.name}" class="eskill"></div>
        `
        element.innerHTML += template;
    }
}

togglebtn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
})