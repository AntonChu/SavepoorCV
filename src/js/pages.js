const links = document.getElementsByClassName('menu-box-link');
const pages = document.getElementsByClassName('page');
const linksArr = Array.from(links);
const pagesArr = Array.from(pages);

linksArr.forEach((item) => item.onclick = () => { // eslint-disable-line
  linksArr.find((el) => el.className.includes('active-link')).classList.remove('active-link');
  item.classList.add('active-link');
  const pageName = item.textContent;
  pagesArr.find((el) => el.className.includes('page-active')).classList.remove('page-active');
  pagesArr.find((el) => el.className.includes(`${pageName}-page`)).classList.add('page-active');
  return false;
});
