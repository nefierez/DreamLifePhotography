export default function sessionSelector() {
    const sessionTypes = document.querySelectorAll(".sessionType");
    sessionTypes.forEach((sessionType) => {
        sessionType.addEventListener("click", (event) => {
            event.preventDefault();
            const querySearch = sessionType.getAttribute("id");
            window.location.href = `services/gallery.html?id=${querySearch}`;
        });
    });
}