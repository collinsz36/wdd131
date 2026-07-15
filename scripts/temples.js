const year = document.querySelector("#currentyear");

year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");

const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");
    document.body.classList.toggle("menu-open"); 

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }

});