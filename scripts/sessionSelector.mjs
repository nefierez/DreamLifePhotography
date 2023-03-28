export default function sessionSelector() {
    return new Promise((resolve) => {
        const sessionTypes = document.querySelectorAll(".sessionType");
        sessionTypes.forEach((sessionType) => {
            sessionType.addEventListener("click", () => {
                const querySearch = Array.from(sessionType.classList).slice(1).join(' ');
                resolve(querySearch);
            });
        });
    });
}