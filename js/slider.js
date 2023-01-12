const swiper = new Swiper('.swiper', {
    effect: 'fade',
    direction: 'horizontal',
});

const slider = document.querySelector('#slider');
const currentSlideTag = document.querySelector('#currentSlide');
const allSlidesTag = document.querySelector('#allSlides');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');

const allSlides = swiper.slides.length;
allSlidesTag.innerHTML = allSlides <= 9 ? `0${allSlides}` : allSlides

slider.addEventListener('mouseenter', () => {
    swiper.params.autoplay.disableOnInteraction = false;
    swiper.params.autoplay.delay = 1000;
    swiper.autoplay.start();
});

slider.addEventListener('mouseleave', () => {
    swiper.autoplay.stop();
});

swiper.on('slideChange', () => {
    const currentSlideIndex = ++swiper.realIndex;
    currentSlideTag.innerHTML = currentSlideIndex <= 9 ? `0${currentSlideIndex}` : currentSlideIndex;
});

arrowLeft.addEventListener('click', () => {
    swiper.slidePrev(500, () => { });
});

arrowRight.addEventListener('click', () => {
    swiper.slideNext(500, () => { });
});