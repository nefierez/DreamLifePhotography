class PhotoSession {
    constructor() {
        this.key = "UCZPZVV8NlGLq9DmYPbnGgWtmlqVHZ3xnp_JOuo1V50";
        this.photoSlider = document.querySelector('.img-slider');
        this.navigation = document.querySelector('.navigation');
    }

    photoSearch(queryWord) {
        let url = "https://api.unsplash.com/search/photos/?client_id=" + this.key + "&query=" + queryWord + "&orientation=landscape";

        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (data) {
                console.log(data);

                data.results.forEach((photo, index) => {
                    const photoHTML = `
                    <picture class="slide ${index === 0 ? 'active' : ''}">
                        <source media="(max-width: 499px)" srcset="${photo.urls.small}">
                        <img src="${photo.urls.regular}" alt="${photo.description}">
                    </picture>`;
                    this.photoSlider.insertAdjacentHTML('beforeend', photoHTML);

                    const buttonHTML = `
                    <div class="slide-btn ${index === 0 ? 'active' : ''}"></div>`;
                    this.navigation.insertAdjacentHTML('beforeend', buttonHTML);
                });

                this.photoSlide(); // call photoSlide here
            }.bind(this));
    }

    photoSlide() {
        let slides = this.photoSlider.querySelectorAll(".slide"); // select slides here
        let btns = this.navigation.querySelectorAll(".slide-btn"); // select buttons here
        let currentSlide = 0;

        let manualNav = function (manual) {
            slides.forEach((slide) => {
                slide.classList.remove("active");

                btns.forEach((btn) => {
                    btn.classList.remove("active");
                });
            });

            slides[manual].classList.add("active");
            btns[manual].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                manualNav(i);
                currentSlide = i;
            });
        });

        let repeat = function () {
            let active = document.getElementsByClassName("active");
            let i = 1;

            const repeater = () => {
                setTimeout(function () {
                    [...active].forEach((activeSlide) => {
                        activeSlide.classList.remove("active");
                    })

                    slides[i].classList.add("active");
                    btns[i].classList.add("active");
                    i++;

                    if (slides.length == i) {
                        i = 0;
                    }

                    if (i >= slides.length) {
                        return;
                    }

                    repeater();
                }, 5000);
            }
            repeater();
        }
        repeat();
    }
}

const session = new PhotoSession();
session.photoSearch("wedding ceremony");