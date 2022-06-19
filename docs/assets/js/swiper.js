var swiper = new Swiper('#main-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true,
});

var swiper = new Swiper('#customer-slider', {
    slidesPerView: 4,
    spaceBetween: 170,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 150,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 120,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 150,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 170,
        }
    }
});

var swiper = new Swiper('#articles-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }

});

var swiper = new Swiper('#videos-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

var swiper = new Swiper('#podcasts-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

var swiper = new Swiper('#our-coaches-slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

var swiper = new Swiper('#testimonials-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

var swiper = new Swiper('#mobile-service-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});