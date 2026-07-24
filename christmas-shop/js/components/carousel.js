export function initSlider() {
  const SLIDER_CONTENT_WIDTH = 1993;

  const slider = document.querySelector('.slider'); 
  const sliderButtons = document.querySelectorAll('.slider-button'); 
  
  if (!slider || !sliderButtons) return;
  
  const sliderLeftArrowButton = sliderButtons[0];
  const sliderRightArrowButton = sliderButtons[1];

  sliderRightArrowButton.addEventListener('click', () => scrollSlider(true));
  sliderLeftArrowButton.addEventListener('click', () => scrollSlider(false));

  function getNumOfSteps() {
    return document.documentElement.clientWidth > 768 ? 3 : 6;
  }  

  function getStepSize(slider) {
    const padding = 2 * parseFloat(window.getComputedStyle(slider).paddingLeft);
    const fullWidth = SLIDER_CONTENT_WIDTH + padding;
    const clientWidth = slider.clientWidth; 
    return (fullWidth -  clientWidth) / getNumOfSteps(); 
  } 


  let currentPosition = 0;
  let step = 0;
  let numOfSteps = getNumOfSteps(); 
  let stepSize =  getStepSize(slider); 
  updateButtonState();

  function updatePosition(isRight) {
    step += isRight ? 1 : -1;
    currentPosition += isRight ? stepSize  :  -stepSize;  
    slider.style.right = currentPosition + 'px';
  }

  function updateButtonState() {
    sliderButtons.forEach(btn => btn.classList.remove('slider-button--inactive'));
    if (step >= numOfSteps) {
      sliderRightArrowButton.classList.add('slider-button--inactive'); 
      step = numOfSteps;
    } else if (step <= 0) {
      sliderLeftArrowButton.classList.add('slider-button--inactive');
      step = 0;
    }  
  } 

  function scrollSlider(isRight) { 
    if (isRight && step >= numOfSteps) {
      return;
    } else if (!isRight && step <= 0) return;
    updatePosition(isRight);
    updateButtonState();
  } 

  window.addEventListener('resize', () => { 
    currentPosition = 0;
    step = 0;
    numOfSteps = getNumOfSteps(); 
    stepSize =  getStepSize(slider); 
    slider.style.right = '0';
    updateButtonState();
  });
}