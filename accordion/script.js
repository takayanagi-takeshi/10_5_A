const menus = document.getElementsByClassName('text-indigo-500');
const contents = document.querySelectorAll('.border-b > p');
const icons = document.querySelectorAll('.border-b > div span:nth-child(2)');
// console.log(menus)

for (let i = 0; i < menus.length; i++) {
  const menu = menus[i];
  menu.addEventListener('click', () => {
  contents[i].classList.toggle('hidden');
  icons[i].classList.toggle('transform');
  icons[i].classList.toggle('rotate-180');
})
}





// for (let i = 0; i < gnavLinks.length; i++) {
//   const gnavLink = gnavLinks[i];
//   gnavLink.addEventListener('click', () => {
//     hmb_menu.classList.remove('active');
//     gnav.classList.remove('open');
//     if (scrollHtml.classList.contains('scrollPrevent')) {
//       scrollHtml.classList.remove('scrollPrevent');
//     }
//   })
// }