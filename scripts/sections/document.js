import { getDishDetails } from "../components/dishes.js";
import { MODAL_SELECTOR, renderModal } from "../components/modal.js";

export const bindEvents = () => {
  const selectors = {
    dishLink: ".dish__link",
    modal: MODAL_SELECTOR,
  };

  document.addEventListener("click", (event) => {
    event.preventDefault();

    const dishLinkElement = event.target.closest(selectors.dishLink);
    const modalElement = document.querySelector(selectors.modal);

    if (dishLinkElement) {
      const dishDetails = getDishDetails(dishLinkElement);
      console.log(dishDetails);
    }
  });
};
