const carouselDots = document.getElementsByClassName('carousel-navigation-button');
const carouselNavigation = Array.from(carouselDots);
carouselNavigation.forEach((item) => item.onclick = () => { // eslint-disable-line
  carouselNavigation.forEach((el) => el.className = 'carousel-navigation-button'); // eslint-disable-line
  item.classList.toggle('carousel-active');
});
