document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Показывать только один слайд за раз
        spaceBetween: 16, // Пространство между слайдами
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet', // Класс для буллетов
            bulletActiveClass: 'swiper-pagination-bullet-active', // Активный класс буллета
        },
        loop: true, // Бесконечная прокрутка
    });


    // Логика для показа/скрытия слайдов
    const toggleBtn = document.getElementById('toggleBtn');
    const hiddenSlides = document.querySelectorAll('.swiper-slide.hidden');

    let isExpanded = false;

    toggleBtn.addEventListener('click', function() {
        if (isExpanded) {
            hiddenSlides.forEach(slide => {
                slide.classList.add('hidden'); // Прячем слайды
            });
            toggleBtn.innerHTML = `<img class="show_button" src="assets/expand.svg" alt="show_all"> Показать все`;
        } else {
            hiddenSlides.forEach(slide => {
                slide.classList.remove('hidden'); // Показываем слайды
            });
            toggleBtn.innerHTML = `<img class="collabse_button" src="assets/collapse.svg" alt="hide_all"> Скрыть`; // Меняем иконку на collapse
        }
        swiper.update(); // Обновляем Swiper после изменения видимости слайдов
        isExpanded = !isExpanded;
    });
});