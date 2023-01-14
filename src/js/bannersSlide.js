const banners = document.getElementsByClassName('main-theme');

const bannersArr = Array.from(banners);

function bannerSlider() {
    let index;

    setInterval(() => {
        index = bannersArr.findIndex((item) => item.className.includes('main-active'));
        console.log(index);

        if (index < bannersArr.length - 1) {
            bannersArr[index].classList.toggle('main-active');
            bannersArr[++index].classList.toggle('main-active');
        } else {
            bannersArr[index].classList.toggle('main-active');
            index = 0;
            bannersArr[index].classList.toggle('main-active');
        }
    }, 5000)
}

bannerSlider();