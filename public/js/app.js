document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("#shop-search");
    const shopItems = document.querySelectorAll(".shop-item");

    searchInput.addEventListener("input", function() {
        const searchValue = searchInput.value.toLowerCase();
        shopItems.forEach(item => {
            const shopName = item.textContent.toLowerCase();
            if (shopName.includes(searchValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselTrack = document.querySelector('.carousel-track');

    // Позиция элементов карусели
    let scrollPosition = 0;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 16; // ширина элемента + отступы

    // Прокрутка назад
    prevBtn.addEventListener('click', () => {
        if (scrollPosition > 0) {
            scrollPosition -= itemWidth;
            carouselTrack.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    });

    // Прокрутка вперед
    nextBtn.addEventListener('click', () => {
        if (scrollPosition < carouselTrack.scrollWidth - carouselTrack.offsetWidth) {
            scrollPosition += itemWidth;
            carouselTrack.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});

$('.carousel').carousel({
    interval: 3000 // интервал смены слайдов в миллисекундах (3 секунды)
});
