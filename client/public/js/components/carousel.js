let imagesCarousel = document.querySelector('#images-carousel');
imagesCarousel.style.display = 'none';
const carousel = (advertorial) => {
    imagesCarousel.style.display = 'inline-block';
    let img = document.createElement('img'),
    counter = 0;
    imagesCarousel.appendChild(img);
    img.src = advertorial[counter];
    counter++;
    setInterval(() => {
        img.src = advertorial[counter];
        counter++;
        if(counter == advertorial.length) counter = 0;
    }, 3000);
}


module.exports = {
    carousel
}