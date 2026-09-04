import { setOwnHeight } from "../base/utils.js";

export const initPromo = () => {
  const selectors = {
    promo: ".promo",
    button: ".promo__button",
  };

  const cssClasses = {
    fadeOut: "fade-out-up",
    hide: "hide",
  };

  const promoElement = document.querySelector(selectors.promo);

  if (!promoElement) {
    console.error('Блок "promo" не найден');
    return;
  }

  const closeButtonElement = promoElement.querySelector(selectors.button);

  const handleTransitionEnd = () => {
    promoElement.classList.remove(cssClasses.fadeOut);
    promoElement.classList.add(cssClasses.hide);
    promoElement.removeAttribute("style");
  };

  const hidePromo = () => {
    promoElement.classList.add(cssClasses.fadeOut);
    promoElement.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });
  };

  setOwnHeight(promoElement);

  closeButtonElement.addEventListener("click", hidePromo);
};
