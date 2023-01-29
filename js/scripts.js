document.addEventListener('DOMContentLoaded', () => {
    const heroBlock = document.querySelector('#hero');
    const header = document.querySelector('header');
    const headerHeight = header.scrollHeight;
    // heroBlock.style.maxHeight = `calc(100vh - ${header.scrollHeight})`;
    heroBlock.style.height = `calc(100vh - 72px)`;
});