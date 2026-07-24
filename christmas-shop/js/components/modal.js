 export function initModal() { 
  const modal = document.querySelector('.backdrop');
  if (!modal) return;
  modal.addEventListener('click', closeModal); 
  
  const cross = modal.querySelector('.close'); 
  if (cross) {
    cross.addEventListener('click', closeModal);
  }    
}

export function openModal(event, giftsByName) {
  const gift = event.target.closest('.gift');
  const modal = document.querySelector('.backdrop');
  if (!gift || !modal) return; 

  const giftName = gift.getAttribute('data-name');
  const giftData = giftsByName[giftName];
  if (!giftData) return;
  
  modal.classList.add('backdrop--active'); 
  document.body.classList.add('no-scroll'); 


  renderModal(giftData);
}

function closeModal(event) {
  const elem = event.target;
  const modal = document.querySelector('.backdrop'); 

  if (!modal) return;
  if (!elem.classList.contains('backdrop--active') && !elem.closest('.close')) return;

  modal.classList.remove('backdrop--active'); 
  document.body.classList.remove('no-scroll');   
}

function renderModal(dataCard) {
  const modal = document.querySelector('.modal-gift');
  if (!modal) return;     

  const imgModal = modal.querySelector('.modal-gift__img');
  const giftCategory = modal.querySelector('.gift__category');
  const giftTitle = modal.querySelector('.gift__title');
  const giftDescription = modal.querySelector('.gift__description');
  const superpowers = modal.querySelector('.superpowers__content'); 

  imgModal.src = `/assets/imgs/gifts/${dataCard.img}`;
  imgModal.alt = dataCard.name;
  giftCategory.textContent = dataCard.category;
  giftCategory.setAttribute('data-gift-for', dataCard.category.toLowerCase());
  giftTitle.textContent = dataCard.name;
  giftDescription.textContent = dataCard.description;
  
  for (const node of superpowers.children) {
    const titleNode = node.querySelector('.superpowers__title');
    const numberNode = node.querySelector('.superpowers__number');
    const snowflakeContainer = node.querySelector('.snowflake-container');
    snowflakeContainer.textContent = '';
    if (!titleNode || !numberNode) continue;
   
    const number = titleNode.textContent.toLowerCase();
    numberNode.textContent = dataCard.superpowers[number];  
    snowflakeContainer.append(createSnowflake((numberNode.textContent))); 
  }       
}

function createSnowflake(powerCount) {
  const MAX_SNOWFLAKES = 5;
  const POWER_VALUE_PER_SNOWFLAKE = 100;  
  const activeCount =  parseInt(powerCount) / POWER_VALUE_PER_SNOWFLAKE; 

  const fragment = new DocumentFragment();
  for (let i = 1; i <= MAX_SNOWFLAKES; i += 1) {
    const snowflakeImg = document.createElement('img'); 
    snowflakeImg.src = i <= activeCount ? 
    `/assets/icons/snowflake.svg` : 
    `/assets/icons/snowflake-inactive.svg`;
    snowflakeImg.alt = 'snowflake';
    fragment.append(snowflakeImg);
  }
  return fragment;
}