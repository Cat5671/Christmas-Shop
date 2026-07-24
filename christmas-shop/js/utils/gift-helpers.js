import { gifts } from "../../assets/gifts.js";

export function renderGift(giftData, index) {
  const gift = document.createElement('li');
  gift.className = 'gift';
  gift.setAttribute('data-name', giftData.name);

  const giftBackground = document.createElement('div');
  giftBackground.className = 'gift__background';
  gift.append(giftBackground);

  const giftImg = document.createElement('img');
  giftImg.className = 'gift__img';
  giftImg.src = `/assets/imgs/gifts/${giftData.img}`;
  giftImg.alt = giftData.name; 

  const giftText = document.createElement('div');
  giftText.className = 'gift__text';

  giftBackground.append(giftImg, giftText);

  const giftCategory = document.createElement('h4');
  giftCategory.className = 'gift__category';
  giftCategory.textContent = giftData.category;
  giftCategory.setAttribute('data-gift-for', giftData.category.toLowerCase());

  const giftTitle = document.createElement('h3');
  giftTitle.className = 'gift__title header-3';
  giftTitle.textContent = giftData.name;

  giftText.append(giftCategory, giftTitle);

  return gift;
} 

export function getRandomGifts(count) {  
  const shuffled = [...gifts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
}

export function renderGifts(shuffledGifts) {
  const fragment = new DocumentFragment();

  for (let i = 0; i < shuffledGifts.length; i += 1) {
    fragment.append(renderGift(shuffledGifts[i], i));
  }
  return fragment
} 

export function giftsByName(sourceArray) {
  return sourceArray.reduce((acc, gift) => {
    const key = gift.name;
    acc[key] = gift;
    return acc;      
  }, {});

}