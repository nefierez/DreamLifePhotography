import PhotoSession from "../scripts/gallery.mjs";
import sessionSelector from "../scripts/sessionSelector.mjs";
import Reviews from "../scripts/reviews.mjs";

document.addEventListener("DOMContentLoaded", function () {
    sessionSelector();
    const queryParams = new URLSearchParams(window.location.search);
    const querySearch = queryParams.get("id");
    const session = new PhotoSession();
    if (querySearch) {
        session.photoSearch(querySearch);
        const sessionTitle = document.querySelector(".sessionTitle");
        sessionTitle.innerHTML = querySearch;
    }
});

const reviews = new Reviews('.reviewsContainer');
reviews.fetchReviews();