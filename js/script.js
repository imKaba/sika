    const burger = document.getElementById("burger");
    const menu = document.querySelector("ul.navbar");

    burger.addEventListener("click", function () {
        menu.classList.toggle("menu-opened");
    });