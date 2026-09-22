import {
  createA11yElement,
  createElement,
  createInputElement,
} from "../../base/elements.js";
import { RUB_PLURAL_FORMS, GRAM_PLURAL_FORMS } from "../../base/plural.js";

export const createSizesElement = (sizes, currency) => {
  const cssClasses = {
    sizes: "product__sizes",
    sizesTitle: "product__sizes-title",
    sizesWrapper: "product__sizes-wrapper",
    size: "product__size size",
    sizeTitle: "size__title",
    sizeWeight: "size__weight",
    sizePrice: "size__price",
  };

  const sizesElement = createElement("fieldset", cssClasses.sizes);

  const sizesTitleElement = createElement("legend", cssClasses.sizesTitle);
  sizesTitleElement.textContent = "Размер";

  sizesElement.append(sizesTitleElement);

  const sizesWrapperElement = createElement("div", cssClasses.sizesWrapper);

  sizes.forEach((sizeOption, index) => {
    const { size, title, price, g: weight } = sizeOption;

    const sizeElement = createElement("label", cssClasses.size);

    const inputElement = createInputElement({
      className: "visually-hidden",
      type: "radio",
      name: "size",
      value: size,
    });

    if (index === 0) {
      inputElement.checked = true;
    }

    const titleElement = createElement("span", cssClasses.sizeTitle);
    titleElement.textContent = title;

    const weightElement = createElement("span", cssClasses.sizeWeight);
    weightElement.textContent = `${weight} г`;
    weightElement.setAttribute("aria-hidden", "true");

    const a11yWeightElement = createA11yElement(weight, GRAM_PLURAL_FORMS);

    const priceElement = createElement("span", cssClasses.sizePrice);
    priceElement.textContent = `${price} ${currency}`;
    priceElement.setAttribute("aria-hidden", "true");

    const a11yPriceElement = createA11yElement(price, RUB_PLURAL_FORMS);

    sizeElement.append(
      inputElement,
      titleElement,
      weightElement,
      a11yWeightElement,
      priceElement,
      a11yPriceElement,
    );

    sizesWrapperElement.append(sizeElement);
  });

  sizesElement.append(sizesWrapperElement);

  return sizesElement;
};
