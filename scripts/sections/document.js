import { dishesDB } from "../base/constants.js";
import { getDishDetails } from "../components/dishes.js";
import {
  renderModal,
  closeModalByClick,
  closeModalByKeyDown,
} from "../components/modal.js";
import { createProductElement } from "../components/product/product.js";

export const bindEvents = () => {
  const selectors = {
    dishLink: ".dish__link",
  };

  document.addEventListener("click", (event) => {
    const isDishLinkClicked = event.target.closest(selectors.dishLink);

    if (isDishLinkClicked) {
      event.preventDefault();

      const dishDetails = getDishDetails(isDishLinkClicked);
      const productElement = createProductElement(dishesDB, dishDetails);

      renderModal(productElement);
    }

    closeModalByClick(event);
  });

  document.addEventListener("keydown", (event) => {
    closeModalByKeyDown(event);
  });
};
