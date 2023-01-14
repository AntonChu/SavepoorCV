const button = document.getElementsByClassName('light-mode-button');
const theme = document.getElementsByTagName('link');

setLightTheme();
theme[0].setAttribute('href', `${localStorage.lightTheme}`);

function setLightTheme() {
    if (localStorage.length === 0) {
        const time =  new Date().toISOString().substring(11, 16);

        if (time > '07:00' && time < '20:00') {
            localStorage.lightTheme = 'css/style.css';
        } else {
            localStorage.lightTheme = 'css/darkstyle.css';
        }
    }
}

button[0].onclick = function() {
    if (theme[0].getAttribute('href') === 'css/darkstyle.css') {
        theme[0].setAttribute('href', 'css/style.css');
        localStorage.lightTheme = 'css/style.css';
        return;
    }

    if (theme[0].getAttribute('href') === 'css/style.css') {
        theme[0].setAttribute('href', 'css/darkstyle.css');
        localStorage.lightTheme = 'css/darkstyle.css';
        return;
    }
}