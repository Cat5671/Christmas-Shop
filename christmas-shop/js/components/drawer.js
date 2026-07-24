export function initBurgerMenu() {
  const burgerButton = document.querySelector('.burger-menu');
  const burgerButtonElem = burgerButton.querySelector('.burger-menu__item');
  const drawer = document.querySelector('.drawer');
  const body = document.body;

  if (!burgerButton || !burgerButtonElem || !drawer) return;

  function toggleMenu() {
    const isOpen = drawer.classList.toggle('drawer--open');
    burgerButtonElem.classList.toggle('burger-menu__item--active', isOpen);
    body.classList.toggle('no-scroll', isOpen);
  }

  burgerButton.addEventListener('click',  toggleMenu);

  drawer.addEventListener('click', (event) => {
    let target = event.target.closest('.nav__elem');
    if (!target) return;
    toggleMenu();
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 768 && drawer.classList.contains('drawer--open')) {
      toggleMenu();
    } 
  });
}
