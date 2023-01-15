const button = document.getElementsByClassName('light-mode-button');
const taga = document.getElementsByTagName('a');
const tagh2 = document.getElementsByTagName('h2');
const tagh4 = document.getElementsByTagName('h4');
const backgroundDark = document.getElementsByClassName('background-color-dark');
const backgroundBlack = document.getElementsByClassName('background-color-black');
const gray = document.getElementsByClassName('gray');
const shadow = document.getElementsByClassName('shadow');
const tagArr = Array.from([...taga, ...tagh2, ...tagh4]);
const backgroundDarkArr = Array.from(backgroundDark);
const backgroundBlackArr = Array.from(backgroundBlack);
const grayArr = Array.from(gray);
const shadowArr = Array.from(shadow);

button[0].onclick = () => {
  if (localStorage.lightTheme === 'day') {
    tagArr.forEach((el) => el.classList.add('white-color-text'));
    backgroundDarkArr.forEach((el) => el.classList.add('dark-background'));
    backgroundBlackArr.forEach((el) => el.classList.add('black-background'));
    grayArr.forEach((el) => el.classList.add('gray-color-text'));
    shadowArr.forEach((el) => el.classList.add('dark-shadow'));
    button[0].classList.add('dark-mode-button');
    localStorage.lightTheme = 'night';
  } else {
    tagArr.forEach((el) => el.classList.remove('white-color-text'));
    backgroundDarkArr.forEach((el) => el.classList.remove('dark-background'));
    backgroundBlackArr.forEach((el) => el.classList.remove('black-background'));
    grayArr.forEach((el) => el.classList.remove('gray-color-text'));
    shadowArr.forEach((el) => el.classList.remove('dark-shadow'));
    button[0].classList.remove('dark-mode-button');
    localStorage.lightTheme = 'day';
  }
};

function setLightTheme() {
  if (localStorage.length === 0) {
    const time = new Date().toISOString().substring(11, 16);
    if (time > '07:00' && time < '20:00') {
      tagArr.forEach((el) => el.classList.remove('white-color-text'));
      backgroundDarkArr.forEach((el) => el.classList.remove('dark-background'));
      backgroundBlackArr.forEach((el) => el.classList.remove('black-background'));
      grayArr.forEach((el) => el.classList.remove('gray-color-text'));
      shadowArr.forEach((el) => el.classList.remove('dark-shadow'));
      button[0].classList.remove('dark-mode-button');
      localStorage.lightTheme = 'day';
    } else {
      tagArr.forEach((el) => el.classList.add('white-color-text'));
      backgroundDarkArr.forEach((el) => el.classList.add('dark-background'));
      backgroundBlackArr.forEach((el) => el.classList.add('black-background'));
      grayArr.forEach((el) => el.classList.add('gray-color-text'));
      shadowArr.forEach((el) => el.classList.add('dark-shadow'));
      button[0].classList.add('dark-mode-button');
      localStorage.lightTheme = 'night';
    }
  } else {
    if (localStorage.lightTheme === 'day') { // eslint-disable-line
      tagArr.forEach((el) => el.classList.remove('white-color-text'));
      backgroundDarkArr.forEach((el) => el.classList.remove('dark-background'));
      backgroundBlackArr.forEach((el) => el.classList.remove('black-background'));
      grayArr.forEach((el) => el.classList.remove('gray-color-text'));
      shadowArr.forEach((el) => el.classList.remove('dark-shadow'));
      button[0].classList.remove('dark-mode-button');
    } else {
      tagArr.forEach((el) => el.classList.add('white-color-text'));
      backgroundDarkArr.forEach((el) => el.classList.add('dark-background'));
      backgroundBlackArr.forEach((el) => el.classList.add('black-background'));
      grayArr.forEach((el) => el.classList.add('gray-color-text'));
      shadowArr.forEach((el) => el.classList.add('dark-shadow'));
      button[0].classList.add('dark-mode-button');
    }
  }
}

setLightTheme();
