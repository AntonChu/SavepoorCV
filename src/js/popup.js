const searchbutton = document.getElementsByClassName('search-button');
const popup = document.getElementsByClassName('popup');
const closeButton = document.getElementsByClassName('close-button');

searchbutton[0].onclick = () => {
  popup[0].classList.toggle('popup-active');
};

closeButton[0].onclick = () => {
  popup[0].classList.toggle('popup-active');
};
