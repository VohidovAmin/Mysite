new WOW().init();
const mySwiper = new Swiper('.projects-slider', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
    }
})