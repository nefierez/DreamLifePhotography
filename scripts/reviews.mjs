export default class Reviews {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    async fetchReviews() {
        const response = await fetch("../scripts/reviews.json");
        const reviews = await response.json();
        this.renderReviews(reviews);
    }

    renderReviews(reviews) {
        if (!this.container) return;

        reviews.forEach((review) => {
            const section = document.createElement('section');
            section.classList.add('review');
            section.innerHTML = `
            <img src="${review.profile}" alt="${review.name}">
            <h3>${review.name}</h3>
            <p>${review.profession}</p>
            <p>${review.photo_session}</p>
            <p>${review.review}</p>
          `;
            this.container.appendChild(section);
        });
    }
}