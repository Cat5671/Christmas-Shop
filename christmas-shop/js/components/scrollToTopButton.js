export function initScrollToTop() {
  const scrollToTopButton = document.querySelector('.scroll-to-top-button');
  if (!scrollToTopButton) return; 

  function toggleScrollToTopButton() {
    if (window.scrollY > 300 && document.documentElement.clientWidth <= 768) {
        scrollToTopButton.classList.add('scroll-to-top-button--active'); 
    } else {
        scrollToTopButton.classList.remove('scroll-to-top-button--active');  
    }
  }
  window.addEventListener('scroll',  toggleScrollToTopButton); 
  window.addEventListener('resize', toggleScrollToTopButton);

  toggleScrollToTopButton();
} 