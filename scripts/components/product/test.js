import { dishesDB } from "../../base/constants.js";
import { getDishDetails } from "../dishes.js";
import { createProductElement } from "./product.js";
import { renderModal } from "../modal.js";

export const selectorsForTests = {
  foBo: "[data-dish-id='fo-bo']",
  gorgonzolaPear: "[data-dish-id='gorgonzola-pear']",
};

export const testDishModal = (linkSelector, delay) => {
  const dishLinkElement = document.querySelector(linkSelector);

  const dishDetails = getDishDetails(dishLinkElement);

  const productElement = createProductElement(dishesDB, dishDetails);

  setTimeout(() => renderModal(productElement), delay);
};
