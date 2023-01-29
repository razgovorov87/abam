const accordions = document.querySelectorAll('.accordion');

accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');
        const icons = self.querySelector('.accordion__icons');
        const plusIcon = icons.querySelector('#plusIcon');
        const minusIcon = icons.querySelector('#minusIcon');


        self.classList.toggle('open');
        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');

        if (self.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

function _animation(wrapper, control, content) {
    if (wrapper.classList.contains('open')) {
        control.classList.remove('col-span-2');
    } else {
        wrapper.classList.remove('row');
        control.classList.add('col-span-2');
    }

    content.classList.toggle('show');
}