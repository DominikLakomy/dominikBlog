(() => {
    const button = document.querySelector(".js-hamburger");
    const menu = document.querySelector(".js-navigationMenu")

    const toggleClass = () => {
        menu.classList.toggle("navigationMenu--open");
        button.classList.toggle("js-hamburger--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();