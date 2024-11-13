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
// Toggle between grid and list views
const gridViewButton = document.querySelector('.grid-view');
const listViewButton = document.querySelector('.list-view');
const shopList = document.querySelector('.shop-list');

gridViewButton.addEventListener('click', () => {
    shopList.classList.remove('list');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
});

listViewButton.addEventListener('click', () => {
    shopList.classList.add('list');
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
});


document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    const searchInput = document.querySelector("#shop-search");
    const shopItems = document.querySelectorAll(".shop-item");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        shopItems.forEach(item => {
            const shopName = item.querySelector(".shop-name").textContent.toLowerCase();
            const shopCategory = item.querySelector(".shop-category").textContent.toLowerCase();
            if (shopName.includes(searchValue) || shopCategory.includes(searchValue)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Carousel Functionality
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carouselTrack = document.querySelector(".carousel-track");

    if (prevBtn && nextBtn && carouselTrack) {
        let scrollPosition = 0;
        const itemWidth = document.querySelector(".carousel-item").offsetWidth + 16; // Element width + margin

        prevBtn.addEventListener("click", () => {
            if (scrollPosition > 0) {
                scrollPosition -= itemWidth;
                carouselTrack.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });

        nextBtn.addEventListener("click", () => {
            if (scrollPosition < carouselTrack.scrollWidth - carouselTrack.offsetWidth) {
                scrollPosition += itemWidth;
                carouselTrack.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });
    }

    // Grid and List View Toggle
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const shopList = document.getElementById("shop-list");

    function setGridView() {
        shopList.classList.remove("list-view");
        gridViewButton.classList.add("active");
        listViewButton.classList.remove("active");
    }

    function setListView() {
        shopList.classList.add("list-view");
        listViewButton.classList.add("active");
        gridViewButton.classList.remove("active");
    }

    gridViewButton.addEventListener("click", setGridView);
    listViewButton.addEventListener("click", setListView);

    // Filter Functionality
    const categorySelect = document.getElementById("category-select");
    const floorSelect = document.getElementById("floor-select");
    const taxFreeCheckbox = document.getElementById("tax-free-checkbox");

    function filterShops() {
        const category = categorySelect.value;
        const floor = floorSelect.value;
        const taxFree = taxFreeCheckbox.checked;

        shopItems.forEach(item => {
            const itemCategory = item.getAttribute("data-category");
            const itemFloor = item.getAttribute("data-floor");
            const itemTaxFree = item.getAttribute("data-taxfree") === "true";

            const matchesCategory = category === "all" || category === itemCategory;
            const matchesFloor = floor === "all" || floor === itemFloor;
            const matchesTaxFree = !taxFree || itemTaxFree;

            if (matchesCategory && matchesFloor && matchesTaxFree) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    }

    categorySelect.addEventListener("change", filterShops);
    floorSelect.addEventListener("change", filterShops);
    taxFreeCheckbox.addEventListener("change", filterShops);
});
document.addEventListener("DOMContentLoaded", function () {
    // Search Filter
    const searchInput = document.querySelector("#event-search");
    const eventItems = document.querySelectorAll(".event-item");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        eventItems.forEach(item => {
            const eventName = item.querySelector(".event-name").textContent.toLowerCase();
            const eventCategory = item.querySelector(".event-category").textContent.toLowerCase();
            if (eventName.includes(searchValue) || eventCategory.includes(searchValue)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

    // View Toggle
    const gridViewButton = document.querySelector(".grid-view");
    const listViewButton = document.querySelector(".list-view");
    const eventList = document.querySelector(".event-list");

    gridViewButton.addEventListener("click", () => {
        eventList.classList.remove("list-view");
        gridViewButton.classList.add("active");
        listViewButton.classList.remove("active");
    });

    listViewButton.addEventListener("click", () => {
        eventList.classList.add("list-view");
        listViewButton.classList.add("active");
        gridViewButton.classList.remove("active");
    });
});
