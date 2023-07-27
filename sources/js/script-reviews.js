var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".myReviews", {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });