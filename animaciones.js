document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 100); // Delay animation for each element
    });
});
