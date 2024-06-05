const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
    const imageWidth = images[0].clientWidth;
    imageContainer.style.transform = `translateX(${-index * imageWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Ajustar el tamaño de la imagen al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    showImage(currentIndex);
});
