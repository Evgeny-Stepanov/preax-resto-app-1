import { initPromo } from "./scripts/components/promo.js";
import { bindEvents } from "./scripts/sections/document.js";
import {
  selectorsForTests,
  testDishModal,
} from "./scripts/components/product/test.js";

initPromo();
bindEvents();

/* If necessary, change the second argument — the delay before opening the modal. */

/* testDishModal(selectorsForTests.foBo, 1000); */
/* testDishModal(selectorsForTests.gorgonzolaPear, 1000); */
