export default function sessionSelector() {
    let querySearch = '';

    const sessionTypes = document.querySelectorAll(".sessionType");
    sessionTypes.forEach((sessionType) => {
        sessionType.addEventListener("click", () => {
            querySearch = Array.from(sessionType.classList).slice(1).join(' ');
        });
    });

    return {
        getSelectedSession() {
            return querySearch;
        }
    };
}