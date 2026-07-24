import { gifts } from "../../assets/gifts.js";
import { getRandomGifts, renderGifts, giftsByName } from "../utils/gift-helpers.js";
import { openModal } from "../components/modal.js";

 
export function initCatalogPageGifts() {
  const giftContainer = document.querySelector('.holiday-gifts');
  const tabs = document.querySelector('.tabs');
  if (!giftContainer || !tabs) return;

   

  const shuffledGifts = getRandomGifts(gifts.length);
  giftContainer.addEventListener('click', () => openModal(event, giftsByName(shuffledGifts)));

  const giftsByCategory = shuffledGifts.reduce((acc, gift) => {
  const categoryKey = gift.category.toLowerCase();
    if (!acc[categoryKey]) acc[categoryKey] = [];
    acc[categoryKey].push(gift);
    return acc;
  }, { 'all': shuffledGifts });

  getGiftsChosenCategory('all');


  function getGiftsChosenCategory(title) {
    const category = title.toLowerCase().trim();
    giftContainer.textContent = '';
    const chosenGifts = giftsByCategory[category];
    giftContainer.append(renderGifts(chosenGifts));
  }

  tabs.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (!tab) return;
    const activeTab = document.querySelector('.tab--chosen');
    if (activeTab) {
      activeTab.classList.remove('tab--chosen'); 
    }
    tab.classList.add('tab--chosen');
    getGiftsChosenCategory(tab.textContent);
  }); 
}