// Language Switching
const languageData = {
    ru: {
        shop_name: "Shik Shak Shop",
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_about: "О нас",
        nav_contact: "Контакты",
        nav_reviews: "Отзывы",
        welcome_title: "Добро пожаловать в Shik Shak Shop!",
        welcome_message: "Ваш любимый интернет-магазин одежды.",
        footer_text: "© 2024 Shik Shak Shop. Все права защищены.",
        contact_title: "Контакты",
        contact_header: "Свяжитесь с нами",
        phone: "Телефон",
        contact_form_header: "Напишите нам",
        placeholder_name: "Ваше имя",
        placeholder_email: "Ваш Email",
        placeholder_message: "Ваше сообщение",
        send_button: "Отправить",
         main_popular: "Популярные товары",
        main_view_product: "Посмотреть",
        reviews_title: "Отзывы наших клиентов",
    reviews_description: "Мы гордимся качеством нашего обслуживания и с радостью делимся отзывами наших клиентов.",
    review1: "Shik Shak Shop - это просто находка! Все товары качественные, а доставка быстрая.",
    review2: "Отличное обслуживание, буду заказывать снова!",
    review3: "Большой выбор товаров и доступные цены. Спасибо!",
        
    },
    tg: {
        shop_name: "Шик Шак Шоп",
        nav_home: "Асосӣ",
        nav_catalog: "Каталог",
        nav_about: "Дар бораи мо",
        nav_contact: "Тамос",
        nav_reviews: "Шарҳҳо",
        welcome_title: "Ба Shik Shak Shop хуш омадед!",
        welcome_message: "Мағозаи дӯстдоштаи либоси шумо.",
        footer_text: "© 2024 Shik Shak Shop. Ҳама ҳуқуқҳо ҳифз шудаанд.",
        
        about_title: "Дар бораи мо - Shik Shak Shop",
        about_header: "Дар бораи мо",
        about_intro_title: "Ба Shik Shak Shop хуш омадед",
        about_intro_text: "Мо мағозаи пешсафи интернетӣ дар Тоҷикистон ҳастем, ки ба либоси муд равона шудааст...",
        about_mission_title: "Мақсади мо",
        about_mission_text: "Мо мекӯшем, ки харидро барои ҳама осон ва дастрас гардонем...",
        about_team_title: "Дастаи мо",
        team_member1_name: "Аниса",
        team_member1_role: "Асосгузор",
        team_member2_name: "Фарид",
        team_member2_role: "Маркетолог",
        team_member3_name: "Зарина",
        team_member3_role: "Тарроҳ",
        about_contact_title: "Тамос",
        about_contact_text: "Барои ҳамкорӣ ё саволҳо бо мо тамос гиред тавассути",
        about_contact_link: "саҳифаи тамос",
        contact_title: "Тамос",
        contact_header: "Бо мо дар тамос шавед",
        phone: "Телефон",
        contact_form_header: "Ба мо нависед",
        placeholder_name: "Номи шумо",
        placeholder_email: "Имейли шумо",
        placeholder_message: "Паёми шумо",
        send_button: "Фиристодан",
        main_popular: "Маҳсулоти машҳур",
        main_view_product: "Намоиш",
        
        reviews_title: "Шарҳҳои муштариёни мо",
    reviews_description: "Мо ба сифати хидматрасонии худ ифтихор мекунем ва бо камоли майл шарҳҳои муштариёни худро пешниҳод мекунем.",
    review1: "Shik Shak Shop - як кашфи ҳақиқӣ аст! Ҳама маҳсулотҳо босифатанд ва таҳвил зуд аст.",
    review2: "Хизматрасонии олиҷаноб, ман боз фармоиш медиҳам!",
    review3: "Интихоби бузурги маҳсулот ва нархҳои дастрас. Ташаккур!",
    }
}; 

document.getElementById("language").addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        if (languageData[lang] && languageData[lang][key]) {
            element.textContent = languageData[lang][key];
        }
    });
});
document.getElementById('categoryFilter').addEventListener('change', function () {
    const selectedCategory = this.value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        if (selectedCategory === 'all' || product.dataset.category === selectedCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Функция для добавления товара в корзину
function addToCart(productId) {
    alert(`Товар ${productId} добавлен в корзину!`);
}

function orderOnWhatsApp(productName, price) {
    const phoneNumber = "+992929256633"; // Вставьте номер телефона продавца
    const message = `Здравствуйте! Я хочу заказать:\n- Товар: ${productName}\n- Цена: ${price} сомони.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}

function addToCart(productName, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} добавлен в корзину!`);
}

function changeMainImage(imageUrl) {
    const mainImage = document.querySelector('.product-main-image');
    mainImage.src = imageUrl;
}

//сортировать
document.getElementById("sort").addEventListener("change", function () {
    const sortBy = this.value;
    const products = [...document.querySelectorAll(".product-card")];

    const sortedProducts = products.sort((a, b) => {
        if (sortBy === "price_asc") {
            return a.dataset.price - b.dataset.price;
        } else if (sortBy === "price_desc") {
            return b.dataset.price - a.dataset.price;
        } else {
            return 0; // Популярность (если нужно, добавьте логику)
        }
    });

    const container = document.querySelector(".product-grid");
    container.innerHTML = ""; // Очистка старых карточек
    sortedProducts.forEach(product => container.appendChild(product)); // Добавление отсортированных
});

// Анимация для выбора фильтров
document.getElementById("categoryFilter").addEventListener("change", function () {
    const selectElement = this;
    selectElement.style.transition = "all 0.3s ease";
    selectElement.style.backgroundColor = "#ff7e5f";
    selectElement.style.color = "white";
    setTimeout(() => {
        selectElement.style.backgroundColor = "white";
        selectElement.style.color = "#333";
    }, 500);
});

// Анимация для сортировки
document.getElementById("sort").addEventListener("change", function () {
    const selectElement = this;
    selectElement.style.transition = "all 0.3s ease";
    selectElement.style.backgroundColor = "#ff7e5f";
    selectElement.style.color = "white";
    setTimeout(() => {
        selectElement.style.backgroundColor = "white";
        selectElement.style.color = "#333";
    }, 500);
});

// шоп тайтл

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Прокрутка вниз
            header.classList.add("header-hidden");
        } else {
            // Прокрутка вверх
            header.classList.remove("header-hidden");
        }
        lastScrollY = window.scrollY;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const reviewCards = document.querySelectorAll(".review-card");
  reviewCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s, transform 0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200); // Задержка для последовательного появления
  });
});
