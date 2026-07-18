const swiper = new Swiper(".projectSwiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    
    // تفعيل النقاط السفلى
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // تفعيل الأسهم (هذا الجزء الذي كان ناقصاً)
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1, // يفضل 1 في الشاشات الصغيرة جداً لكي يظهر السلايدر بشكل جيد
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.custom-navbar');
    const vh100 = window.innerHeight; // حساب الـ 100vh بالبكسل ديناميكيًا

    if (window.scrollY >= vh100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


