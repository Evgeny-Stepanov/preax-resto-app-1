import { createButtonElement, createElement } from "../../base/elements.js";
import { calculatePrice } from "./price.js";
import { createSizesElement } from "./sizes.js";
import { createSupplementsElement } from "./supplements.js";

export const createFormElement = ({ sizes, currency, dishSupplementsIds }) => {
  const cssClasses = {
    form: "product__form",
    buttonWrapper: "product__button-wrapper",
    button: "product__button",
    price: "product__price",
  };

  const formElement = createElement("form", cssClasses.form);

  if (sizes.length > 1) {
    const sizesElement = createSizesElement(sizes, currency);

    formElement.append(sizesElement);
  }

  if (dishSupplementsIds.length) {
    const supplementsElement = createSupplementsElement(
      dishSupplementsIds,
      currency,
    );

    formElement.append(supplementsElement);
  }

  const buttonWrapperElement = createElement("div", cssClasses.buttonWrapper);

  const buttonElement = createButtonElement(cssClasses.button, "submit");

  const buttonTextElement = createElement("span");
  buttonTextElement.textContent = "Добавить в корзину";

  const buttonPriceElement = createElement("span", cssClasses.price);

  const visibleButtonPriceElement = createElement("span");
  visibleButtonPriceElement.setAttribute("aria-hidden", "true");

  const a11yButtonPriceElement = createElement("span", "visually-hidden");

  buttonPriceElement.append(visibleButtonPriceElement, a11yButtonPriceElement);

  buttonElement.append(buttonTextElement, buttonPriceElement);

  buttonWrapperElement.append(buttonElement);

  formElement.append(buttonWrapperElement);

  calculatePrice({
    formElement,
    sizes,
    priceElement: buttonPriceElement,
    currency,
  });

  formElement.addEventListener("change", () => {
    calculatePrice({
      formElement,
      sizes,
      priceElement: buttonPriceElement,
      currency,
    });
  });

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  return formElement;
};
