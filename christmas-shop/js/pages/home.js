import { getRandomGifts, renderGifts, giftsByName } from "../utils/gift-helpers.js" 
import { openModal } from "../components/modal.js";


export function initHomePageGifts() {
  const giftCards = document.querySelector('.gifts');
  if (!giftCards) return;  
  const shuffled4Gifts = getRandomGifts(4); 
  giftCards.addEventListener('click', (event) => 
    openModal(event, giftsByName(shuffled4Gifts))); 
  giftCards.append(renderGifts(shuffled4Gifts));
}

 