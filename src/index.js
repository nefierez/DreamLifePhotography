function toggleNav() {
    const menuBars = document.querySelectorAll(".menuIcon span");
    const menuIcon = document.querySelector(".menuIcon");
    const sideMenu = document.querySelector(".sideMenu");

    for (let menuBar of menuBars) {
        menuBar.classList.toggle("menuBars");
    }

    sideMenu.classList.toggle("menuDisplay");
    menuIcon.classList.toggle("closeIcon");

    displayingServices();
    closingMenu();
};

function displayingServices() {
    const displayServices = document.querySelector(".services");
    const servicesList = document.querySelectorAll(".servicesHide");

    displayServices.addEventListener("click", () => {
        servicesList.forEach((service) => {
            service.classList.toggle("servicesShow");
        });
    });
};

function closingMenu() {
    const menuDisplay = document.querySelector(".menuDisplay");
    const servicesList = document.querySelectorAll(".servicesHide");

    menuDisplay.addEventListener("click", (event) => {
        if (!event.target.closest(".sideMenu ul")) {
            menuDisplay.classList.remove("menuDisplay");
            servicesList.forEach((service) => {
                service.classList.remove("servicesShow");
            });
            const menuBars = document.querySelectorAll(".menuIcon span");
            const menuIcon = document.querySelector(".menuIcon");
            for (let menuBar of menuBars) {
                menuBar.classList.remove("menuBars");
            }
            menuIcon.classList.remove("closeIcon");
        }
    });
}
